import express from "express";
import employeeRoutes from "./employeeRoutes";

const router = express.Router();

const setupRoutes = (): express.Router => {
  employeeRoutes(router);
  return router;
};

export default setupRoutes();
