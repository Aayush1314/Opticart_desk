const { Mongoose } = require("mongoose")

const   express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        cors = require("cors"),
        multer = require("multer"),
        fs = require("fs"),
        path = require("path")
        

var storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads")
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname +"-", Date.now())
    }
})

var uploads = multer({storage: storage})

const { getspecs, postspecs, readingSpecs } = require("./controllers/getspecs")
app.use(bodyParser.json()) 
app.use(cors())
const uri = "mongodb+srv://opticart:opticart@cluster0.2areu.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true } )

app.get("/", getspecs)
app.get("/reading-specs", readingSpecs)
app.post("/specs", postspecs)


app.listen(8000,()=>{
    console.log("Server Stated")
})
