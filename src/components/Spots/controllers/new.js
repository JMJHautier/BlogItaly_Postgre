import {useState} from 'react'


const New = ({id, setSpotModified, hideNew, setHideNew}) => {
 
    const[newArticle, setNewArticle] = useState({
      title: '',
      body: '', 
      imgurl: ''
    });

    const updateInfo = (event) => {
      setNewArticle({ ...newArticle, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
      event.preventDefault()
      const options = {
        method: 'POST',
        body: JSON.stringify(newArticle),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        const response = await fetch(`http://localhost:3001/spots/new`, options)
        .then(response => setSpotModified(response))
        .then(console.log(setSpotModified))
        .then(setHideNew(true))
      } catch (error) {console.log(error)}
    }


  return  (
<p hidden={hideNew} className="edit">
     <form className="createSpot" onSubmit={onSubmit}> 
        <label>Title<input name="title" type="text"  onChange={updateInfo}/></label><br />
        <label>Body<textarea name="body" type="textarea" onChange={updateInfo} row="10" cols="25"></textarea></label> <br />
        <label>image URL <input name="imgurl" type="text" onChange={updateInfo}/></label> <br /> 
      <input type="submit" value="submit"/>
      </form>
</p>)
  }

  export default New