import express from "express"
import { createEmployee, deleteEmployeeById, getEmployeeByName, getEmployees, updateEmployeeById } from "../schemas/employee"

export const getEmployeesController = async (req: express.Request, res: express.Response) => {
  try {
    const employees = await getEmployees()

    return res.status(200).json(employees)

  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
}

export const createEmployeeController = async (req: express.Request, res: express.Response) => {
  try {
    const { name, position, department, admissionDate } = req.body

    if (!name || !position || !department || !admissionDate) res.sendStatus(400)

    if (await getEmployeeByName(name)) res.sendStatus(400)

    const employee = await createEmployee({
      name, position, department, admissionDate
    })

    return res.status(200).json(employee)

  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
}

export const updateEmployeeController = async (req: express.Request, res: express.Response) => {
  try {
    const { id, name, position, department, admissionDate } = req.body

    if (!name || !position || !department || !admissionDate) res.sendStatus(400)

    const employee = await updateEmployeeById(id,
      {
        name,
        position,
        department,
        admissionDate
      }
    )

    return res.status(200).json(employee)

  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
}

export const deleteEmployeeController = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.body

    if (!id) res.sendStatus(400)

    await deleteEmployeeById(id)

    return res.status(200).json({
      message: "Employeen deleted"
    })

  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
}