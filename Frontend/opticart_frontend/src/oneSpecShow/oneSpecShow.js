import React, { useEffect } from "react"
import "./oneSpecShow.css"
const OneSpecShow = ({specId})=>{
    useEffect(()=>{
        console.log(specId)  
    }, [])
    return(
        <div className="row">
            <div className="col-md-8" >
                <div className="d-flex" style={{background: "black"}}>
                    <img height="500px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpXNPlH0XVJochYR_2TNIdTBERnRW03-z0g&usqp=CAU" />
                </div>
                <div className="d-flex flex-wrap align-content-around justify-content-around">
                    <div className="test-element" style={{background:"purple"}}>   

                    </div>
                    <div className="test-element" style={{background:"purple"}}>   

                    </div>
                    <div className="test-element" style={{background:"purple"}}>   

                    </div>
                    <div className="test-element" style={{background:"purple"}}>   

                    </div>
                    <div className="test-element" style={{background:"purple"}}>   

                    </div>
                </div>
                
            </div>
            <div className="col-md-4">
                <div>
                    <h1>{specId.Category}</h1>
                    <p>Color:{specId.Color}</p>
                    <h1>{specId.Gender}</h1>
                    <h1>{specId.Style}</h1>
                    <h1>{specId.Price}</h1>
                </div>
            </div>
        </div>
    )
}

export default OneSpecShow