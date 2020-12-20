import React from "react"
import { Link } from "react-router-dom"
import GenderModal from "../components/genderModal"
import "../styles/CategoryNav.css"
var cNameF="custom-nav-link ", 
    cNameCL="custom-nav-link ",
    cNameS="custom-nav-link "
var CategoryNav = () => {

    
    const addActive = (arg) => {
        cNameF = "custom-nav-link "
        cNameS = "custom-nav-link "
        cNameCL = "custom-nav-link "
        if (arg === "frame") {
            cNameF = cNameF+"active"
        }
        else if (arg === "sunglass") {
            cNameS = cNameS+ "active"
        }
        else if (arg === "contactLens") {
            cNameCL = cNameCL+"active"
        }
    }

    return (
        
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-around">
                        <Link data-toggle="modal" onClick={() => { addActive("frame") }} data-target="#exampleModal" className={cNameF} to="/frames">Frames</Link>
                        <Link data-toggle="modal" onClick={()=>{addActive("sunglass")}} data-target="#exampleModal" className={cNameS} to="/sunglasses">Sunglasses</Link>
                        <Link data-toggle="modal" onClick={()=>{addActive("contactLens")}} data-target="#exampleModal" className={cNameCL} to="/contactLens">Contact Lens</Link>
                        
                    </div>
                </div>
            </div>
        
    )
}

export default CategoryNav