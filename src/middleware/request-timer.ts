import type { Request, Response } from "express";

export const requestTimer = async (
  req: Request,
  res: Response,
  next: () => void,
): Promise<void> => {
  let responseTime: number = 0;
  const url = req.protocol + "://" + req.get("host") + req.originalUrl;
  const size = req.socket.bytesRead;
  const startTime = process.hrtime.bigint();

  const printCheck = () => {
    console.log(
      `Request Timer - URL: ${url}, Size: ${size} bytes, Response Time: ${responseTime} ms`,
    );
  };

  const printError = (error: Error) => {
    console.error(`Error during request timer: ${error.message}`);
  };

  const logHealthCheck = new Promise<void>((resolve, reject) => {
    try {
      req.on("end", () => {
        const endTime = process.hrtime.bigint();
        responseTime = Number(endTime - startTime) / 1_000_000;
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

  next();
  logHealthCheck.then(printCheck).catch(printError);
};