import React from "react"
import { Link } from "react-router-dom"
import GenderModal from "../components/genderModal"
import "../styles/CategoryNav.css"
var cNameF="custom-nav-link ", 
    cNameCL="custom-nav-link ",
    cNameS="custom-nav-link "
var CategoryNav = ({ classF, classS }) => {

    
    

    return (
        
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-around">
                        <Link data-toggle="modal"  data-target="#exampleModal" className= {classF} to="/frames">Frames</Link>
                        <Link data-toggle="modal"  data-target="#exampleModal" className={classS} to="/sunglasses">Sunglasses</Link>
                        
                    </div>
                </div>
            </div>
        
    )
}

export default CategoryNav