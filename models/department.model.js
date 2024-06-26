
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
    {
        departmentName: { 
            type: String, 
            required: true 
        },
        location: {
            type: String,
            required: true
        }
    }
);

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department