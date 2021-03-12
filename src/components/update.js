import * as contentful from 'contentful-management';
import {useState} from 'react'


const Update = ({id, title, setRenameTitle, hideForm, setHideForm}) => {
    const client = contentful.createClient({
        space: "oquthnn4rslh",
        accessToken:"CFPAT-xsyC3Tqqs9MCM2RCVDzrIqoWQ6V9WBhQQuDoUzn6RV8"
      })
    const[newTitle, setNewTitle] = useState(title);

    const updateTitle = () => {
        setHideForm(true);

        client.getSpace('oquthnn4rslh')
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.getEntry(`${id}`))
        .then((entry) => {
            entry.fields.title['en-US'] = `${newTitle}`;

            return entry.update()
          })
        .then((entry) =>(entry.publish()))
        .then((response)=> {console.log(response);setRenameTitle(`${newTitle}`)})

      }

  return  (<p> {typeof title === "undefined"?(<p>Loading</p>):
  (<p hidden={hideForm} className="edit">
      <input type="text" defaultValue={title} onChange={(event)=>setNewTitle(event.target.value)}/> 
      <input type="submit" value="submit" onClick={updateTitle}/></p>)}
    </p>)



  }

  export default Update

            //
            //setArticles((prevArticle)=>({...prevArticle, spots: {...prevArticle.spots, fields:{...prevArticle.spots.fields, title: `${entry.fields.title['en-US']}`} }}));


  /* Create entry
  client.getSpace('<space_id>')
  .then((space) => space.getEnvironment('<environment-id>'))
  .then((environment) => environment.createEntryWithId('<content_type_id>', '<entry_id>', {
    fields: {
      title: {
        'en-US': 'Entry title'
      }
    }
  }))
  .then((entry) => console.log(entry))
  .catch(console.error)*/