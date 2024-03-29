
const express = require("express");
const router = require("./routes/index")
const app = express()
const cors = require("cors")
const port = 3000

const  {connectToDB} = require("./Mongodb")
connectToDB()


app.use(cors())
app.use(express.json())
app.use("/api/v1",router)

app.listen(port,()=>console.log(`started listening on port${port}`))

module.exports = app;