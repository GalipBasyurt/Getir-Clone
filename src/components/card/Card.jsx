import React, { useEffect, useState } from 'react'
import Cards from "api/cards"

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    setCards(Cards)
  },[])
console.log(cards);
  return (
    <div className=' md:grid-cols-2 lg:grid-cols-3 grid gap-4 container mx-auto mt-12 px-4 md:px-0 mb:-mt-4 mb-0 '>
        {
          cards && cards?.map((card)=>(
            <div key={card.id} className='flex items-center justify-center text-center flex-col bg-white rounded-lg shadow-md p-10'>
              <img className='mb-5' src={card?.image} alt="#" />
              <div className='mb-2 text-lg text-primary-brand-color  tracking-tight	'>{card?.title}</div>
              <p className='text-sm text-gray-600'>{card?.description}</p>
            </div>
          ))
        }
    </div>
  )
}

export default Card