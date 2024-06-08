const connectDB = require('./db/dbConnection.js')
const employeeRoute = require("./routes/employees.route.js")
const cors = require("cors")
const express = require("express")

require('dotenv').config()
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public/images"))

app.use(cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true
}))


//routes
app.use("/api/employees", employeeRoute)

// main route
app.get('/', (req, res)=> {
    res.send('<h1>Welcome to the Employees API</h1>')
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