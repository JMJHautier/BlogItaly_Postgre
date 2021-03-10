import React, {useState} from "react"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Update from './update'
import {Button, Collapse} from 'react-bootstrap';

const Spot = ({id, article, setArticles, textToShow}) => {
  console.log(textToShow)
  const {title, body, image} = article.fields
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  return (<div>
    {textToShow === id?
    (<div className="spot" >      
      <h2>{title}
        <Button 
        variant="light"
        onClick={()=>setIsEdit(true)}>Edit
        </Button> 
        <Button
        variant="success"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Read More
      </Button>
</h2>
{isEdit === true?(<Update id={id} title={title} setArticles={setArticles}/>):(<p></p>)} 
     

      <Collapse in={open}><p>{documentToReactComponents(body)}</p></Collapse>

      </div>)
      :<p></p>}</div>)
      


}

export default Spot
