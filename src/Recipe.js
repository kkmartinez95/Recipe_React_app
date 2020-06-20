import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className="title">{title}</h1>
      <ol className="ingredients">
        {ingredients.map((ingredient, indx) => (
          <li key={indx}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories.toFixed(2)}</p>
      <img className={style.pic} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
