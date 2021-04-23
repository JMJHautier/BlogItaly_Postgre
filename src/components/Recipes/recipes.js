import React from "react";
import SideBar from "../SideBar/SideBar.js";
import Recipe from "../Recipe/recipe.js";
import "./style.css";
import { useParams } from "react-router-dom";


const Recipes = ({props,articles}) => {
  const { recipeId } = useParams();
  console.log(recipeId)
  return (
    <section className="container">
    <Recipe recipeId={recipeId} {...props}/>
      <SideBar />
    </section>
  );
};

export default Recipes;
