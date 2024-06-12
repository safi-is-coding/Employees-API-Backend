const mongoose = require("mongoose")

// const employeeSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "Please enter employee name"]
//         },
//         email: {
//             type: String,
//             required: [true, "Please enter employee email"],
//             unique: true
//         },
//         DOB: {
//             type: String,
//             required: [true, "DOB is required"]
//         },
//         salary: {
//             type: Number,
//             required: [true, "Please enter employee salary"],
//             default: 0
//         },
//         experience: {
//             type: Number,
//             required: [true, "Please enter employee experience"],
//             default: 0
//         },
//         empImage: {
//             type: String,
//             required: true
//         }
//     },

//     {
//         timestamps: true
//     }
// )

// const Employees = mongoose.model("Employees", employeeSchema)



const employeeSchema = new mongoose.Schema(
    {
        firstName: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        phone: {
            type: String,
            required: true
        },
        
        address: {
            type: String,
            required: true
        },
        
        dateOfBirth: {
            type: Date,
            required: true
        },
        empImage: {
            type: String,
            required: true
        },
        
        departmentId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Department' 
        },
        roleId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Role' 
        },
        managerId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Employee' 
        }
    },
    {
        timestamps: true
    }
);

const Employees = mongoose.model('Employee', employeeSchema);

module.exports = Employees