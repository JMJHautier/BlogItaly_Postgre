import {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import "./App.css"
import Recipes from './components/Recipes/recipes';
import Spots from "./components/Spots/spots"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ContactUs from "./components/Contact-us"
import Login from "./components/Login"
import "react-multi-carousel/lib/styles.css";


const App = () => {
  const [articles, setArticles] = useState('')
  const [spotModified, setSpotModified] = useState('');

//* Getting the spots with PostGre 

  useEffect(()=> {
    fetch('http://localhost:3001/spots')
    .then(res  => res.json())
    .then(data => setArticles(data))
  }, [spotModified]);


  //* Getting the spots with Contentful 
  // useEffect(() => {
  //   const getSpots = () => {
  //     try{client.getEntries({content_type: "spot"}).then(response => {
  //       setArticles(prevArticle => ({...prevArticle, spots: response.items}))
  //     })}catch(error) {console.log(error)};
  //     console.log(`Updated with ${renameTitle}!`)
  //   }
  //   getSpots()
  // }, [renameTitle])

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
            {articles?<Spots articles={articles} setSpotModified={setSpotModified}/>:<p>Loading...</p>}
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

