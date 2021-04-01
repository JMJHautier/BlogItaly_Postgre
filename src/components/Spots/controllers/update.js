import {useState} from 'react'


const Update = ({id, article, setSpotModified,  hideForm, setHideForm}) => {
  const {title, body, imgurl} = article;
  const url = `http://localhost:3001/spots/update/${id}`
 
    const[newArticle, setNewArticle] = useState({
      title: title,
      body: body, 
      imgurl: imgurl
    });

    const updateInfo = (event) => {
      setNewArticle({ ...newArticle, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
      event.preventDefault()
      const options = {
        method: 'PUT',
        body: JSON.stringify(newArticle),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        const response = await fetch(`http://localhost:3001/spots/update/${id}`, options)
        .then(response => setSpotModified(response))
        .then(console.log(setSpotModified))
        .then(setHideForm(true))
      } catch (error) {console.log(error)}
    }


  return  (<p> {typeof title === "undefined"?(<p>Loading</p>):
  (<p hidden={hideForm} className="edit">
     <form onSubmit={onSubmit}> 
        <label>Title<input name="title" type="text" defaultValue={title} onChange={updateInfo}/></label><br />
        <label>Body<textarea name="body" type="textarea" defaultValue={body} onChange={updateInfo} row="10" cols="25"></textarea></label> <br />
        <label>image URL <input name="imgurl" type="text" defaultValue={imgurl} onChange={updateInfo}/></label> <br /> 
      <input type="submit" value="submit"/> </form> </p>)}
    </p>)



  }

  export default Update

         