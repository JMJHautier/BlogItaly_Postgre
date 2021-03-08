import React from 'react'

const Recipe = ({article}) => {
    console.log(article.fields);
    const {name, description, featuredImage} = article.fields
    
    return (
        <div>
            <h2>{name}</h2>
            <p><img src={featuredImage.fields.file.url} alt="file"/> </p>
            <p>{description}</p>
        </div>
    )
}


export default Recipe
