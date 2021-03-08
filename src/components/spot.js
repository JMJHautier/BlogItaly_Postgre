import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Spot = ({article}) =>{
    console.log(article.fields);
    const {title, body, image} = article.fields
    return (
        <div>
            <h2>{title}</h2>
            <p><img src={image.fields.file.url} alt="file"/> </p>

            <p>{documentToReactComponents(body)}</p>
        </div>
    )
}


export default Spot