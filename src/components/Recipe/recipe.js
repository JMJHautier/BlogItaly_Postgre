import React, { useEffect, useState } from "react";
import marked from "marked";
import "./style.css";
import Card from "../Card/Card";
import { client } from "../../client";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [articles, setArticles] = useState();
  const [recipe, setRecipe] = useState();

  const { recipeId } = useParams();
  
  useEffect( () => {
    if (articles) {
      const currentRecipe = articles.recipes.find(recipe => recipe.fields.id == recipeId);
      setRecipe(currentRecipe);
    }
  }, [articles, recipeId]);

  useEffect(() => {
    const getRecipes = () => {
      client.getEntries({ content_type: "recipeBlog" }).then(response => {
        setArticles({
          recipes: response.items,
        });
      });
    };
    getRecipes()
  }, [articles, recipeId]);



  return (
    <div className="blogPostContainer">
      <Card >
        <div className="blogHeader">
          <span className="blogCategory w3-tag w3-round w3-green w3-border w3-border-white">Featured Recipe</span>
          <h1 className="postTitle"> {recipe && recipe.fields.name}  </h1>
          <span className="postedBy">
            <h5>
              posted on {recipe && recipe.fields.postedOn} by {''}
                {recipe && recipe.fields.author}
            </h5>
          </span>
        </div>
        <div className="recipeImage">
          <img
            src={recipe && recipe.fields.featuredImage.fields.file.url}
            alt="Post"/>
        </div>
        <div className="recipeContent">
          <p dangerouslySetInnerHTML={{__html: recipe && marked(recipe.fields.description)}}/>
        </div>
      </Card>
    </div>  
  )
};

export default Recipe;
