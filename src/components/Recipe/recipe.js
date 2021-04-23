import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";

const Recipe = (props) => {
  const [articles, setArticles] = useState('');
  const [recipe, setRecipe] = useState('');

  const { recipeId } = useParams();
  
  useEffect( () => {
    if (articles) {
      const currentRecipe = articles.find(recipe => recipe.id == recipeId);
      setRecipe(currentRecipe);
    } 
  }, [articles, recipeId]);

  /* useEffect(() => {
    const getRecipes = () => {
      client.getEntries({ content_type: "recipeBlog" }).then(response => {
        setArticles({
          recipes: response.items,
        });
      });
    };
    getRecipes()
  }, [articles, recipeId]); */

  useEffect(()=> {
    fetch('http://localhost:3001/recipes')
    .then(res  => res.json())
    .then(data => setArticles(data))
  }, [articles, recipeId]);

  if(!articles) 
    return <Spinner/>
  
  return (
      <div className="blogPostContainer">
      <Card >
        <div className="blogHeader">
          <span className="blogCategory w3-tag w3-round w3-green w3-border w3-border-white">Featured Recipe</span>
          <h1 className="postTitle"> {recipe.name}  </h1>
          <span className="postedBy">
            <h5>
              posted on {recipe.posted_on} {''} by {''}
                {recipe.author}
            </h5>
          </span>
        </div>
        <div className="recipeImage">
          <img
            src={recipe.image}
            alt="Post"/>
        </div>
        <div className="recipeContent">
          <h3> Ingredients </h3>
          <p>{recipe.ingredients}</p> 
          <h3> Method </h3>
          <p>{recipe.method}</p> 
        </div> 
      </Card>
    </div>  
    
  )
};

export default Recipe;
