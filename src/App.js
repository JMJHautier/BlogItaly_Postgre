import { useState, useEffect } from "react";
import { client } from "./client";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Spots from "./components/spots";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ContactUs from "./components/Contact-us";
import Login from "./components/Login";
import Recipes from './components/Recipes/recipes';

const App = () => {
  const [articles, setArticles] = useState({ articles: [] });

  useEffect(() => {
    const getSpots = () => {
      client.getEntries({ content_type: "spot" }).then(response => {
        setArticles(prevArticle => ({ ...prevArticle, spots: response.items }));
      });
    };
    getSpots();
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <img  
              src="https://www.welgrowgroup.com/blog/wp-content/uploads/2019/05/experiences-food-wine-hero-1-de-bortoli-yarra-valley-estate-victoria-2014-069027-2000x837-1.jpg"
              alt="homepage"
            />
          </Route>
          <Route path="/recipes/:recipeId" component={Recipes}>
            </Route>
          
          <Route path="/spots">
            <Spots posts={articles.spots} />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

