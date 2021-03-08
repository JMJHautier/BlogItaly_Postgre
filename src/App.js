import { useState, useEffect} from 'react'; 
import { client } from './client'
import { Switch, Route, NavLink} from 'react-router-dom';

import './App.css';

import Recipes from './components/recipes'
import Spots from './components/spots'
 

function App() {
  const [articles, setArticles] = useState({ articles:[]});

  useEffect(()=>{
    const getRecipes = () => {
      client.getEntries({'content_type':'recipeBlog'})
      .then((response) => {
        setArticles({
          recipes: response.items}
        );})
    }
    const getSpots = () => {
      client.getEntries({'content_type': 'spot'})
      .then((response)=> {
        setArticles(prevArticle => ({...prevArticle, 
          spots: response.items}));})
    }
    getRecipes();
    getSpots();
 

  }, [])

  return (<div>
    <header> <NavLink to="/">  <div> <img src="https://icon-library.com/images/italy-icon/italy-icon-21.jpg" alt="homepage"/> </div></NavLink>
    <nav><ul><li><NavLink to="/recipes">My recipes</NavLink></li><li><NavLink to="spots">My spots</NavLink></li> </ul> </nav> <div> <span>Search</span> <input type="text"/></div></header> 
    
    <main>
    <Switch>
      <Route exact path="/"><img src="https://www.welgrowgroup.com/blog/wp-content/uploads/2019/05/experiences-food-wine-hero-1-de-bortoli-yarra-valley-estate-victoria-2014-069027-2000x837-1.jpg" alt="homepage"/></Route>
      <Route path="/recipes"> <div> <Recipes posts={articles.recipes}/></div></Route>
      <Route path="/spots"> <div>  <Spots posts={articles.spots}/></div></Route>
    </Switch>
    </main>
  <footer><ul><li>contact</li><li>Social media</li><li>Blog</li><li>Our team</li></ul></footer></div>)

  
}


export default App;
