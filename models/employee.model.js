const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter employee name"]
        },
        email: {
            type: String,
            required: [true, "Please enter employee email"]
        },
        DOB: {
            type: String,
            required: [true, "DOB is required"]
        },
        salary: {
            type: Number,
            required: [true, "Please enter employee salary"],
            default: 0
        },
        experience: {
            type: Number,
            required: [true, "Please enter employee experience"],
            default: 0
        },
        empImage: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
)

const Employees = mongoose.model("Employees", employeeSchema)

module.exports = Employees