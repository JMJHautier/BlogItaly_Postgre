import React, {useState} from "react"
import Update from './controllers/update'
import {Button, Collapse} from 'react-bootstrap';
import "./style.css";



const Spot = ({id, article, setSpotModified, textToShow}) => {

const {title, body, imgurl} = article
const [isEdit, setIsEdit] = useState(false);
const [hideForm, setHideForm] = useState(true);
const [open, setOpen] = useState(false);
console.log(id)

// start Delete onclick event. I wanted to create a separate module but I did not manage to do it. how to  Export id and setSpotModified ? can't put a component as onclick event
const options = 
    {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    }
  const remove  = async () => {
  try {
    const response = await fetch(`http://localhost:3001/spots/delete/${id}`, options)
    .then(setSpotModified("Deleted"))
    .then(console.log(setSpotModified))
  } catch (error) {console.log(error)}

  remove();
}

// end Delete onClickEvent

  return (
    <div>
    {textToShow === id?
        (<div className="spot"> 
            <h2>{title}

                <Button 
                variant="edit"
                onClick={()=>{setIsEdit(true);setHideForm(!hideForm)}}> Edit
                </Button> 
                
                <Button 
                variant="red"
                onClick={remove}>Delete
                </Button> 
            </h2>

            {isEdit?
                (<Update id={id} article={article}  setSpotModified={setSpotModified} hideForm={hideForm} setHideForm={setHideForm}/>)
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
                    <div>{body}</div> 
                </Collapse>

                <Button 
                hidden={!open} variant="light"
                onClick={()=>window.open()}
                >
                    Edit
                </Button> 
        </div>)
        :console.log(`${title} is not shown`)}
    </div>)
                


}

export default Spot
