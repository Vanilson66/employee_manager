import express from "express"

import employeeRoutes from "./employeeRoutes"

const router = express.Router()

export default (): express.Router => {
  employeeRoutes(router)

  return router
} 