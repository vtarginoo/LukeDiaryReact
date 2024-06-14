/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

import express from "express";
const app = express(); // Cria uma instância do Express

export default (req, res, next) => {
  if (req.method === "POST") {
    req.body._id = Date.now().toString();
  }
  next();
};
