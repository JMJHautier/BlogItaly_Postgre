import React, {useState} from "react"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Update from './update'

const Spot = ({key, article, setArticles}) => {
  console.log(article.fields)
  const {title, body, image} = article.fields
  const {id} = article.sys;
  console.log(id);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="spot">
      <h2>{title}</h2> <button onClick={()=>setIsEdit(true)}>Edit</button>
      {isEdit === true?(<Update key={key} id={id} title={title} setArticles={setArticles}/>):(<p></p>)} 
      <p>
        <img src={image.fields.file.url} alt="file" />
       </p>

      <p>{documentToReactComponents(body)}</p>
      
    </div>)



}

export default Spot
