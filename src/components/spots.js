import React from "react"
import Spot from "./spot.js"

const Spots = ({posts, setArticles}) => {
  console.log(posts);
  return (
    <div className="spot">
      {posts.map(article => {
          console.log(article.sys.id);
          return (<Spot key={article.sys.id} article={article} setArticles={setArticles}/>
        )
})}
</div>)
      }


export default Spots
