import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"

import "../styles/types.css"


var Types = ({section,onSectionChange, productCategory}) => {
    
    //const [redirect,setRedirect] = useState(false)

        /*const queryParam = reading
        data = await axios.get("http://localhost:8000/reading-specs",{
              params:{
                  Category: queryParam
              }
        })
        if (data){
            onBackendResponseChange(data)
            console.log("redirecting")
                
        }*/
    
    
    return (
        <div className="section">
            <div className="header">
                <h1>Types Of Glasses</h1>
            </div>
            
            <div className="container">
            <div className="row row-height d-flex justify-content-center">
                <div className="col-md-3 col-sm-6 bg-success " onClick={()=>onSectionChange("readingGlass")}  >
                    <Link to=  "/frames/readingGlass" >Reading Glasses</Link>
                </div>
                <div className="col-md-3 col-sm-6 bg-success" onClick={()=>onSectionChange("computerGlass")}  >
                    <Link to="/frames/computerGlass">Computer Glasses</Link>
                </div>
                <div className="col-md-3 col-sm-6 bg-success" onClick={()=>onSectionChange("poweredSunglass")} >
                    <Link to="/frames/poweredSunglass">Powered Sunglasses</Link>
                </div>
                <div className="col-md-3 col-sm-6 bg-success" onClick={()=>onSectionChange("eyeglass")} >
                    <Link to="/frames/eyeglass">eyeglass</Link>
                </div>
                <div className="col-md-3 col-sm-6 bg-success" onClick={()=>onSectionChange("kidsGlass")} >
                    <Link to="/frames/kidsGlass">Kids Glasses</Link>
                </div>
                
                </div>
            </div>
            </div>
        
    )

}

export default Types