import express from "express";

import {
  createEmployeeController,
  deleteEmployeeController,
  getEmployeesController,
  updateEmployeeController
} from "../controllers/employeeController";

export default (router: express.Router) => {
  router.get("/getEmployees", getEmployeesController);
  router.post("/createEmployee", createEmployeeController);
  router.post("/updateEmployee", updateEmployeeController);
  router.post("/deleteEmployee", deleteEmployeeController);
};
