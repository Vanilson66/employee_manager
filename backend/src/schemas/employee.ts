import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  position: { type: String, require: true },
  department: { type: String, require: true },
  admissionDate: { type: String, require: true },
})

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema)