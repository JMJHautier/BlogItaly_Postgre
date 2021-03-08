import React from 'react'
import Spot from './spot.js'

const Spots = ({posts}) => {
    console.log(posts)
    return (
        <div>
            {posts.map((article)=> <Spot article = {article}/>)}
        </div>
    )
}



export default Spots
