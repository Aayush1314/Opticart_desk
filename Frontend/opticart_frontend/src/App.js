import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom'
import Navbar from "./components/navbar"
import Postslider from "./components/postslider"
import GenderModal from "./components/genderModal"

import Carousel from "./components/carousel"
import Types from "./components/Types"
import Shapes from "./components/shapes"
import Glasses from "./Specs show/glasses"
import Nav from "./Header-nav/nav"
import CategoryNav from "./components/categoryNav"

import OneSpecShow from "./oneSpecShow/oneSpecShow"
function App() {
  console.log("from app")
  const [section, setSection] = useState("")
  const [specId, setSpecId] = useState([])
  const [gender , setGender] = useState("male")
  const [style, setStyle] = useState("")
 
  useEffect(()=>{
    setGender(localStorage.getItem("gender"))
  },[])
  useEffect(()=>{
    localStorage.setItem("gender", gender)
  })
 
  console.log(gender,section,style)
  return (
    <div>

      <BrowserRouter>

        <Route path="/" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav classS="custom-nav-link" classF="custom-nav-link"></CategoryNav>    
        </Route>

        <Route path="/frames" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav classS="custom-nav-link" classF="custom-nav-link active"></CategoryNav>
          <GenderModal onGenderChange= {setGender}></GenderModal>
          <Types productCategory="frames"  section={section} onSectionChange = {setSection}></Types>

        </Route>
        
        <Route path="/sunglasses" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav classF="custom-nav-link" classS="custom-nav-link active"></CategoryNav>
          <GenderModal onGenderChange= {setGender}></GenderModal>
          <Shapes shapeChange = {setStyle} productCategory="sunglasses" ></Shapes>
        </Route>
        
        <Route path="/contactLens" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav></CategoryNav>
          <GenderModal onGenderChange= {setGender}></GenderModal>
        </Route>
  
        
        <Route path="/sunglasses/:sty" exact>
          <Nav></Nav>
          <Glasses productCategory="sunglasses" style={style} gender={gender} section={section} setSpecID={setSpecId} onSectionChange = {setSection}></Glasses>
        </Route>

        <Route path="/frames/:specType/:sty" exact>
          <Nav></Nav>
          <Glasses onGenderChange={setGender} onStyleChange={setStyle} productCategory="frames" style={style} gender={gender} section={section} setSpecID={setSpecId} onSectionChange = {setSection}></Glasses>
        </Route>

        <Route path="/frames/:specType" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav classS="custom-nav-link" classF="custom-nav-link active"></CategoryNav>
          <Shapes shapeChange = {setStyle} productCategory="frames" section={section} onSectionChange = {setSection}></Shapes>
        </Route>

        <Route path="/glasses/:specId">
          <Nav></Nav>
          <OneSpecShow specId={specId}></OneSpecShow>
        </Route>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
