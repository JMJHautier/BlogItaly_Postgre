import React, {useState} from "react"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Update from './update'
import {Button, Collapse} from 'react-bootstrap';

const Spot = ({id, article, setRenameTitle, textToShow}) => {
  const {title, body} = article.fields
  const [isEdit, setIsEdit] = useState(false);
  const [hideForm, setHideForm] = useState(true);
  const [open, setOpen] = useState(false);
    const contentfulLink = "https://app.contentful.com/spaces/oquthnn4rslh/entries/" + id;
  return (
    <div>
    {textToShow === id?
        (<div className="spot"> 
            <h2>{title}

            <Button 
            variant="light"
            onClick={()=>{setIsEdit(true);setHideForm(false)}}>Edit
            </Button> 


            </h2>

            {isEdit?
                (<Update id={id} title={title} setRenameTitle={setRenameTitle} hideForm={hideForm} setHideForm={setHideForm}/>)
                :(<span></span>)
            } 
            
            <Button
            variant="flat"
            size="xxl"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            Read More
        </Button>

            <Collapse in={open} >
                <div>{documentToReactComponents(body)}</div> 
            </Collapse>
            <Button 
            hidden={!open} variant="light"
            onClick={()=>window.open(contentfulLink)}>Edit
            </Button> 
        </div>)
        :console.log(`${title} is not shown`)}
    </div>)
                


}

export default Spot
