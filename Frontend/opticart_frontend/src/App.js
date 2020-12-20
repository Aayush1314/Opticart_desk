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
 
  //console.log(backendResponse , "app")
  useEffect(()=>{
    const sectionData = localStorage.getItem("section")
    const styleData = localStorage.getItem("styles")
    const genderData = localStorage.getItem("gender")
    if (sectionData){
      setSection(sectionData)
    }
    if (styleData){
      setStyle(styleData)
    }
    if (genderData){
      setGender(genderData)
    }
    console.log("from localstirage.getItem useEffect")
  }
  ,[])

  useEffect(()=>{
    localStorage.setItem("section", section)
    localStorage.setItem("styles", style)
    localStorage.setItem("gender", gender)
    console.log("from localstirage.setItem useEffect")
  })
 
  console.log(gender,section,style)
  return (
    <div>

      <BrowserRouter>

        <Route path="/" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav></CategoryNav>    
        </Route>

        <Route path="/frames" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav></CategoryNav>
          <GenderModal onGenderChange= {setGender}></GenderModal>
          <Types productCategory="frames"  section={section} onSectionChange = {setSection}></Types>

        </Route>
        
        <Route path="/sunglasses" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav></CategoryNav>
          <GenderModal onGenderChange= {setGender}></GenderModal>
          <Shapes shapeChange = {setStyle} productCategory="sunglasses" ></Shapes>
        </Route>
        
        <Route path="/contactLens" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav></CategoryNav>
          <GenderModal onGenderChange= {setGender}></GenderModal>
        </Route>
        
        <Route path="/frames/shapes" exact>
          <Nav></Nav>
          <Carousel></Carousel>
          <CategoryNav></CategoryNav>
          <Shapes shapeChange = {setStyle} productCategory="frames" section={section} onSectionChange = {setSection}></Shapes>
        </Route>

        <Route path="/frames/glasses" exact>
          <Nav></Nav>
          <Glasses onGenderChange={setGender} onStyleChange={setStyle} productCategory="frames" style={style} gender={gender} section={section} setSpecID={setSpecId} onSectionChange = {setSection}></Glasses>
        </Route>
        
        <Route path="/sunglasses/glasses" exact>
          <Nav></Nav>
          <Glasses productCategory="sunglasses" style={style} gender={gender} section={section} setSpecID={setSpecId} onSectionChange = {setSection}></Glasses>
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
