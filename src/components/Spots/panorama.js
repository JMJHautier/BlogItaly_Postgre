import React from "react"
import "./style.css";

const Panorama = ({id, article, setTextToShow}) => {
    const {imgurl, imgalt} = article
    return (<img onClick={()=>{setTextToShow(id);}} src={imgurl} alt={imgalt} draggable={false}
    style={{ width: "100%", height: "100%" }}/>)
  }
  
  export default Panorama;