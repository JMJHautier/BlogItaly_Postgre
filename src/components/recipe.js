import React from "react"
import marked from "marked"

const recipe = ({article}) => {
  console.log(article.fields)
  const {name, description, featuredImage} = article.fields
  const postDescription = marked(description)
  return (
    <div className="recipes">
      <h2>{name}</h2>
      <p>
        <img src={featuredImage.fields.file.url} alt="file" />
      </p>
      <p dangerouslySetInnerHTML={{__html: postDescription}} />
    </div>
  )
}

export default recipe
