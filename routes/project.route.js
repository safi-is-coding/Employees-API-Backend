const express = require('express')
const { getProjects, createProjects, deleteProject, updateProjects, findSingleProject } = require('../controllers/project.controller.js')

const router = express.Router()

// getting all the Project data
router.get('/', getProjects)

// posting the Project data
router.post('/', createProjects)

// deleting the Project by id
router.delete('/:id', deleteProject)

// updating the Project by id
router.put('/:id', updateProjects)

// finding single Project by id
router.get('/:id', findSingleProject)

module.exports = router

// [
//     {
//         "projectName": "New Website Development",
//         "startDate": "2023-01-15",
//         "endDate": "2023-06-15",
//         "managerId": "6664821d054db27e365be38d",
//         "departmentId": "6667e2f3e1966e2c2afcfbc1"
//     },
//     {
//         "projectName": "Mobile App Launch",
//         "startDate": "2023-03-01",
//         "endDate": "2023-12-01",
//         "managerId": "666482dc054db27e365be391",
//         "departmentId": "6667e2f3e1966e2c2afcfbc6"
//     },
//     {
//         "projectName": "Market Research Analysis",
//         "startDate": "2023-02-20",
//         "endDate": "2023-08-20",
//         "managerId": "66648344054db27e365be393",
//         "departmentId": "6667e2f3e1966e2c2afcfbbd"
//     },
//     {
//         "projectName": "Employee Training Program",
//         "startDate": "2023-04-10",
//         "endDate": "2023-10-10",
//         "managerId": "6664838f054db27e365be395",
//         "departmentId": "6667e2f3e1966e2c2afcfbce"
//     },
//     {
//         "projectName": "Cloud Migration",
//         "startDate": "2023-05-01",
//         "endDate": "2023-11-01",
//         "managerId": "666483d5054db27e365be397",
//         "departmentId": "6667e2f3e1966e2c2afcfbc8"
//     }
// ]
