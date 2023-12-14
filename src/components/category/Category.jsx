import React from 'react'

const Category = ({category}) => {
  return (
    <a href="#" className='flex items-center text-center flex-col p-2 gap-y-3 hover:bg-purple-100 hover:rounded-md  transition-all group'>
      <img src={category?.image} alt={category?.title} className='h-12 w-12 rounded border border-gray-100'/>
      <div className='text-center text-sm font-semibold group-hover:text-primary-brand-color text-gray-400 tracking-tighter'>{category?.title}</div>
    </a>
  )
}

export default Category