import React, { useEffect, useState } from 'react'
import categoriesData from "../../api/categories.json"
import Category from './Category'
const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    setCategories(categoriesData)
  },[])
  console.log(categories);
  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto'>
        <h3 className='font-semibold text-sm mb-3'>Kategoriler</h3>
        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12'>
        {
          categories && categories.map((category)=>(<Category key={category?.id} category={category}/>)) 
        }
        </div>
      </div>
    </div>
  )
}

export default Categories