import React, {useState} from "react"

const Panorama = ({id, article, setTextToShow}) => {
    console.log(`${id}`);
    const {image, title} = article.fields
    return (<img onClick={()=>setTextToShow(`${id}`)} src={image.fields.file.url} alt="file" draggable={false}
    style={{ width: "100%", height: "100%" }}/>)
  }
  
  export default Panorama;