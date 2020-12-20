import React, { useEffect, useState } from "react"
import axios from 'axios'
import {Redirect, Link} from "react-router-dom"
import "./glasses.css"
var Glasses = ({style, section,onSectionChange, setSpecID, productCategory, gender}) => {
    
    const [results, setResults] = useState([])
    
    //console.log(backendResponse)
    
    var renderedResults
    
    useEffect(()=>{
        const callAPI = async ()=>{
            
            console.log(section,gender,style, "from glass")
            if (productCategory==="frames"){
                const { data } = await axios.get("http://localhost:8000/reading-specs",{
                        params:{
                        Category: section,
                        ProductCategory: productCategory,
                        Gender: gender,
                        Shape: style
                        }
                })
                if (data){
                    setResults(data.specs)
                }
            }
            else{
                const { data } = await axios.get("http://localhost:8000/reading-specs",{
                        params:{
                        ProductCategory: productCategory,
                        Gender: gender,
                        Shape: style
                        }
                })
                console.log(productCategory,gender,style)
                if (data){
                    setResults(data.specs)
                }
            }
            
            
        }
        callAPI()

    },[])
    
    renderedResults = results.map((result)=>{
        return(
            <React.Fragment key={result._id}>
                    <div className="img-thumbnail dimensions" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpXNPlH0XVJochYR_2TNIdTBERnRW03-z0g&usqp=CAU"
                            className="img-thumbnail"
                            alt="Cinque Terre"
                            width="304"
                            height="236"
                        />
                        <Link to={`/glasses/${result._id}`}>
                            <h5 onClick={()=> setSpecID(result)} className="card-title">{result.Style}</h5>
                            <h5 onClick={()=> setSpecID(result)} className="card-title">{result.ProductCategory}</h5>
                            <h5 onClick={()=> setSpecID(result)} className="card-title">{result.Gender}</h5>

                        </Link>
                    </div>
            </React.Fragment>
        )
    })
    


    return (

        <div className="row">
            <div className="specGrid">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    {renderedResults}
                </div>
            </div>
        </div>

    )
}

export default Glasses