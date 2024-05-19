import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  position: { type: String, require: true },
  department: { type: String, require: true },
  admissionDate: { type: String, require: true },
})

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema)

// Metodos
export const getEmployees = () => EmployeeModel.find()
export const getEmployeeByName = (id: number) => EmployeeModel.findById(id)
export const createEmployee = (values: Record<string, any>) => new EmployeeModel(values)
  .save().then(user => user.toObject())
export const updateEmployeeById = (id: number, values: Record<string, any>) => EmployeeModel.findByIdAndUpdate(id, values)
export const deleteEmployeeById = (id: number) => EmployeeModel.findByIdAndDelete(id)