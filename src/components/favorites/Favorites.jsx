import React, { useEffect, useState } from 'react'
import Products from "../../api/products.json"
import Product from './Product'

const Favorites = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        setProducts(Products)
    },[])
    console.log(products);
  return (
    <div className='container mx-auto mt-5'>
            <h3 className='font-semibold text-sm mb-3'>Favoriler</h3>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 justify-items-center overflow-hiddenrounded-lg gap-0.1'>
                {
                    products.length && products?.map((product)=><Product key={product?.id} product={product}/>)
                }
            </div>
    </div>
  )
}

export default Favorites