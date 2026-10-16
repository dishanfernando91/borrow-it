import express, { type Express } from "express";

export const createApp = (): Express => {
  return express();
}

export const app = createApp();