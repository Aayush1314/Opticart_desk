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
            
            <div className="container-fluid">
            <div className="row row-height">
                <div className="col" onClick={()=>onSectionChange("readingGlass")}  style={{ background: "black" }}>
                    <Link to=  "/frames/shapes" >Reading Glasses</Link>
                </div>
                <div className="col" onClick={()=>onSectionChange("computerGlass")} style={{ background: "grey" }} >
                    <Link to="/frames/shapes">Computer Glasses</Link>
                </div>
                <div className="col" onClick={()=>onSectionChange("poweredSunglass")} style={{ background: "grey" }}>
                    <Link to="/frames/shapes">Powered Sunglasses</Link>
                </div>
                <div className="col" onClick={()=>onSectionChange("eyeglass")} style={{ background: "grey" }}>
                    <Link to="/frames/shapes">eyeglass</Link>
                </div>
                <div className="col" onClick={()=>onSectionChange("kidsGlass")} style={{ background: "black" }}>
                    <Link to="/frames/shapes">Kids Glasses</Link>
                </div>
                
                </div>
            </div>
            </div>
        
    )

}

export default Types