const connectDB = require('./db/dbConnection.js')
const employeeRoute = require("./routes/employees.route.js")
const cors = require("cors")
const express = require("express")
const path = require('path');

require('dotenv').config()
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public/images"))
app.use(express.static(path.join(__dirname, 'frontend')));


app.use(cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true
}))


//routes
app.use("/api/employees", employeeRoute)

// main route
app.get('/addEmployee', (req, res)=> {
    // res.send('<h1>Welcome to the Employees API</h1>')
    res.sendFile(path.join(__dirname, 'frontend', 'addEmp.html'));
})

app.get('/', (req, res)=> {
    // res.send('<h1>Welcome to the Employees API</h1>')
    res.sendFile(path.join(__dirname, 'frontend', 'viewEmp.html'));
})

app.get('/', (req, res)=> {
    // res.send('<h1>Welcome to the Employees API</h1>')
    res.sendFile(path.join(__dirname, 'frontend', 'singleEmp.html'));
})


// DB Connection
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000, ()=> {
        console.log(`Server connected at port ${process.env.PORT}`);
    })
})
.catch(()=> {
    console.log("Server connection error");
})