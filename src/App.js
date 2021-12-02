import './App.css';
import Recipe from './Recipe';
import React,{useEffect, useState} from 'react';

function App() {
  const APP_ID = "bf6d0f9b";
  const APP_KEY = "991b01edee869f881515bbafd1ba5040";
  //ExampleRequest.. after q is the query, what we will search for
  //https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
  //const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([]);

  useEffect( () =>{
    console.log('Effect has been run');
    getRecipes();//
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);//make a request and wait for it
    const data = await response.json();//we waited, we fetch data and we format it 
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //pass info from component->props->component
  return (
    <div className="App">
       <form className="search-form">
         <input className="search-bar" type="text"/>
         <button className="search-button" type="submit">
            Search
         </button>
       </form>
       {recipes.map(recipe => (//recipe is an array, map it
         <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
         />
       ))}
    </div>
  );
};

export default App;
