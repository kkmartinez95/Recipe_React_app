import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const girl = require('./girl.png');

const App = () => {
  const APP_ID = '6a8a5b30';
  const APP_KEY = 'd2781d2c59f841afcf4fa6ed61c7dca6';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('apple');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };
  return (
    <div className="App">
      <div id="header">
        <h1 className="kaitlyn">Kaitlyn's Recipe App</h1>
        <img className="girl" src={girl} alt="" />
      </div>

      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for Recipes Here!"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="parent-of-recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
