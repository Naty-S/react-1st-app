import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {
  
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} /> {/* Mando la ref a 'setCategories' */}
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category} // Normalmente viene de la DB
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}
