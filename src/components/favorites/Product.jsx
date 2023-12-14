import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
const Product = ({product}) => {
  return (
    <div className='grid col-span-1 '>
      <div className=' bg-white flex items-center justify-center text-center flex-col gap-y-1 p-3 relative'>
        <button className='absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-brand-color'>
          <AiOutlinePlus size={19}/>
        </button>
        <img src={product.image} alt="" />
        <div className='text-sm font-semibold text-brand-color'>{product.price}</div>
        <div className='text-sm font-semibold text-gray-900'>{product.title}</div>
        <div className='text-gray-500'>{product.alt}</div>
      </div>
    </div>
  )
}

export default Product