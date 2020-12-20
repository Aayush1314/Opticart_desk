const { json } = require("body-parser")
const specs = require("../models/specs")

exports.getspecs = (req,res)=>{
    specs.find((err,result)=>{
        res.json({specs: result})
    })
}

exports.readingSpecs = (req,res)=>{
    specs.find({
        Category: req.query.Category, 
        ProductCategory: req.query.ProductCategory,
        Gender: req.query.Gender,
        Style: req.query.Shape},
        (err,result) => {
        if (err){
            return res.status(400).json({
                error: err
            })
        }
        console.log(result, req.query.Category,req.query.ProductCategory, req.query.Gender)
        return res.json({
            specs: result
        })
    })
}

exports.postspecs = (req,res) => {
    const spec = new specs(req.body)
    spec.save((err,result) => {
        if (err){
            console.log("Failed")
            return res.status(400).json({
                error: err
            })
        }
        else{
            return res.status(200).json({spec: result})
        }
    })

}