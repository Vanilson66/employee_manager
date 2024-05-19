import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  admissionDate: { type: String, required: true }
});

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

// Métodos
export const getEmployees = () => EmployeeModel.find();

export const getEmployeeByName = (name: string) => EmployeeModel.findOne({ name });

export const createEmployee = (values: Record<string, any>) => new EmployeeModel(values)
  .save()
  .then(employee => employee.toObject());

export const updateEmployeeById = (_id: string, values: Record<string, any>) => {
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return ('Invalid ID');
  }
  return EmployeeModel.findByIdAndUpdate(_id, values, { new: true }).then(employee => employee?.toObject());
};

export const deleteEmployeeById = (_id: string) => {
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return ('Invalid ID');
  }
  return EmployeeModel.findByIdAndDelete(_id);
};
