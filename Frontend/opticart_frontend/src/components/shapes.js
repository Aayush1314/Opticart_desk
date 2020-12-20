import React from "react"
import { Link } from "react-router-dom"
import "../styles/types.css"

var Shapes = ({onSectionChange,shapeChange,section,productCategory}) => {
        console.log(productCategory)
    return (
        <div className="section">
                <div className="header">
                    <h1>Types Of Shapes</h1>
                </div>
                
                <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 col-sm-2"  >
                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("rounded")} >rounded<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>
                    </div>
                    <div className="col-md-3 col-sm-2"  >

                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("square")} >square<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>


                    </div>
                    <div className="col-md-3 col-sm-2"  >
                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("catEye")} >cateye<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>
                    </div>
                    <div className="col-md-3 col-sm-2"  >

                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("rectangle")} >rectangle<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>

                    </div>
                
                    <div className="col-md-3 col-sm-2"   >

                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("halfRim")} >Half Rim<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>

                    </div>
                    <div className="col-md-3 col-sm-2" >

                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("fullRim")} >Full Rim<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>

                    </div>
                    <div className="col-md-3 col-sm-2" >

                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("octagon")} >Octogon<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>

                    </div>
                    <div className="col-md-3 col-sm-2">
                                <Link to={`/${productCategory}/glasses`} onClick={() =>shapeChange("circle")} >circle<img className="shapesImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" /> </Link>
                </div>
                </div>
                </div>
                </div>
        
    )

}

export default Shapes