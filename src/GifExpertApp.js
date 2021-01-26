import React, {useState} from 'react';

import AddCategory from './components/AddCategory.js'
import { GifGrid } from './components/GifGrid.js';

const GifExpertApp = () => {

  const [ categories, setCategories] = useState(['One Punch'])

  // const handleAdd = () =>{
  //     setCategories([...categories, 'Pokemon'])
    
  // }

  return (
    <>
      <h2> GifExpertApp</h2>
        <AddCategory setCategories = { setCategories } />
        <hr /> 
         
           <ol> 
                {categories.map( ( category ) => {
                   return <GifGrid 
                            key={category} 
                            category= {category} /> 
                })}
           </ol>
         
    </>

  )

};


export default GifExpertApp;