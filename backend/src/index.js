const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const morgan = require("morgan")
const path = require("path")
mongoose.connect("mongodb://localhost:27017/filesUpload",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(require("./router"))

app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "storage", "files"))
)


app.listen(3001)