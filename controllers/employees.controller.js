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

// const updateEmployee = async(req, res) => {
//     try {
//         const { id } = req.params

//         const { name, email, DOB, salary, experience } = req.body;
//         let empImage = req.file.filename;
        
//         empImage = await uploadOnCloudinary(empImage)
//         // console.log(empImage, "hi");


//         const employee = await Employees.findByIdAndUpdate(id, {
//             name,
//             email,
//             DOB,
//             salary,
//             experience,
//             empImage
//         });

//         res.status(200).json({message : 'Employee updated successfully', employee})
        
//         // const { id } = req.params
//         // const employee = await Employees.findByIdAndUpdate(id, req.body)

//         // if(!employee){
//         //     res.status(400).json({message: 'Employee not found'})
//         // }

//         // res.status(200).json({message : 'Employee updated successfully', employee})

//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// }

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, DOB, salary, experience } = req.body;

        // Check if all required fields are provided
        if (name=='' || email=='' || DOB=='' || salary=='' || experience=='') {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        // Check if the employee exists
        const employee = await Employees.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found.' });
        }

        // Check if an image file is provided
        let empImage = 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1717930916~exp=1717934516~hmac=59bef242306aaa2cc875ac60c987c98a6c13ea40a239b4d2b0427f72e2e1a651&w=740';
        console.log(req.file);
        if (req.file) {
            empImage = req.file.filename;
            // Upload the image to Cloudinary or any other cloud storage service
            empImage = await uploadOnCloudinary(empImage);
        }
        // Update employee details
        const updatedEmployee = await Employees.findByIdAndUpdate(id, {
            name,
            email,
            DOB,
            salary,
            experience,
            empImage
        }, { new: true });

        res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const findSingleEmployee = async(req, res) => {
    try {

        const { id } = req.params
        const employee = await Employees.findById(id)

        if(!employee){
            res.status(400).json({message: 'Employee not found'})
        }

        res.status(200).json(employee)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
    findSingleEmployee
}