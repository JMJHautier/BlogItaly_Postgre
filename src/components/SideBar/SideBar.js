import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import "./style.css";
import { NavLink } from "react-router-dom";
import { client } from "../../client";

const SideBar = (props) => {
  const [articles, setArticles] = useState({ articles: [] });

  useEffect(() => {
    const getRecipes = () => {
      client.getEntries({ content_type: "recipeBlog" }).then(response => {
        setArticles({
          recipes: response.items,
        });
      });
    };
    getRecipes();
  }, []);

  const recipes = articles.recipes;

  return (
    <div className="sideBarContainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}>
        <div className="cardHeader">
          <span>About us</span>
        </div>
        <div className="teamImgContainer">
          <img
            src="https://www.teambonding.com/wp-content/uploads/2012/10/pizza2-400x300.jpg"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="cardText"> We are team of three people and we love cooking❤️</p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}>
        <div className="cardHeader">
          <span>Social Network</span>
          <div className="socialMedia"> <i class="fab fa-facebook-square"></i> 
          <i class="fab fa-instagram-square"></i> 
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-linkedin"></i></div>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}>
        <div className="cardHeader">
          <span> Recent Posts </span>
        </div>

        {articles.recipes && recipes.map(recipe => {
          return (
            <div className="recentPosts">
              <NavLink key={recipe.fields.id} to={`/recipes/${recipe.fields.id}`}>
                <div className="recentPost">
                  <h3>{recipes && recipe.fields.name}</h3>
                  <span> {recipes && recipe.fields.postedOn} </span>
                </div>
              </NavLink>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default SideBar;
