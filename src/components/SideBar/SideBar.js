import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import "./style.css";
import { NavLink } from "react-router-dom";
import { client } from "../../client";

const SideBar = () => {
  const [articles, setArticles] = useState('');


 /*  useEffect(() => {
    const getRecipes = () => {
      client.getEntries({ content_type: "recipeBlog" }).then(response => {
        setArticles({
          recipes: response.items,
        });
      });
    };
    getRecipes();
  }, []); */
  
  useEffect(()=> {
    fetch('http://localhost:3001/recipes')
    .then(res  => res.json())
    .then(data => setArticles(data))
  }, []);

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

        {articles && articles.map(article => {
          return (
            <div className="recentPosts">
              <NavLink key={article.id} to={`/recipes/${article.id}`}>
                <div className="recentPost">
                  <h3>{article.name}</h3>
                  <span> {article.posted_on} </span>
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
