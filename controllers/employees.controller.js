const Employees = require('../models/employee.model.js')
const upload = require("../middlewares/multer.js")
const uploadOnCloudinary = require('../utils/cloudinary.js')

const getEmployees = async (req, res) => {
    try {

        const employees = await Employees.find({})
        res.status(200).json(employees)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createEmployee = async (req, res) => {
    // try {
        
    //     const employee = await Employees.create(req.body)

    //     const image = 

    //     res.status(200).json(employee)

    // } catch (error) {
    //     res.status(500).json({message: error.message})
    // }

    try {
        const { name, email, DOB, salary, experience } = req.body;
        let empImage = req.file.filename;
        
        empImage = await uploadOnCloudinary(empImage)
        console.log(empImage, "hi");


        const employee = await Employees.create({
            name,
            email,
            DOB,
            salary,
            experience,
            empImage
        });

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    

}

const deleteEmployee = async(req, res) => {
    try {

        const { id, name } = req.params
        const employee = await Employees.findByIdAndDelete(id)

        if(!employee){
            res.status(400).json({message: "Employee not found !!"})
        }

        res.status(200).json({message: `employee deleted successfully`})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const updateEmployee = async(req, res) => {
    try {
        
        const { id } = req.params
        const employee = await Employees.findByIdAndUpdate(id, req.body)

        if(!employee){
            res.status(400).json({message: 'Employee not found'})
        }

        res.status(500).json({message : 'Employee updated successfully', employee})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findSingleEmployee = async(req, res) => {
    try {

        const { id } = req.params
        const employee = await Employees.findById(id)

        if(!employee){
            res.status(400).json({message: 'Employee not found'})
        }

        res.status(500).json(employee)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
    findSingleEmployee
}