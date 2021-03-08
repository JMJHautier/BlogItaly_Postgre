import React from 'react'

const Spot = ({article}) =>{
    console.log(article.fields);
    const {title, body, image} = article.fields
    return (
        <div>
            <h2>{title}</h2>
            <p><img src={image.fields.file.url} alt="file"/> </p>

            <p>{body}</p>
        </div>
    )
}


export default Spot