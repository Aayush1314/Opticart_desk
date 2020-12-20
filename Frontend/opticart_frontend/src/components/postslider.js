import React from "react";
import "../styles/postslider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Postslider = ()=>{
  return (
    <div className="section">
      <div className="header">
        <h1>Types Of Glasses</h1>
      </div>
      <div className="h-div">
        <div className="col-sm-6 slider">
              
        </div>
        <div className="h-div-sq">
        <div className="h-div-el" style={{background:"black"}}>

        </div>
        <div className="h-div-el" style={{background:"grey"}}>
          
        </div>
        <div className="h-div-el" style={{background:"black"}}>
          
        </div>
        <div className="h-div-el" style={{background:"grey"}}>
          
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Postslider


