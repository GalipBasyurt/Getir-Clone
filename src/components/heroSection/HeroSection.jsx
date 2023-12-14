import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import {
  useWindowWidth,
} from '@react-hook/window-size'
const HeroSection = () => {
  const [selected, setSelected] = useState("TR")
  const windowWidth = useWindowWidth()
  const phones = {
    US:"+1",
    DE:"+50",
    TR:"+90",
    IT:"+7",
    IN:"+15"
  }
  const settings = {
    dots: false,
    autoplay:true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows: false
  };
  return (
    <div className='relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:z-10 before:w-full before:h-full'>
         {
          windowWidth >= 768 &&   <Slider {...settings}>
          <div>
            <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt=""  className='w-full h-[500px] object-cover'/>
          </div>
          <div>
            <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" className='w-full h-[500px] object-cover' />
          </div>
        </Slider>
         }
        <div className='md:container flex justify-between items-center relative  md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20'>
         <div className='hidden md:block'>
         <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className='font-semibold text-white text-4xl mt-8'>Dakikalar içinde <br /> kapınızda</h3>
         </div>
         <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6 flex flex-col items-center justify-center'>
          <h4 className='text-primary-brand-color font-semibold mb-4'>Giriş yap veya kayıt ol</h4>
         <div className='grid gap-y-3'>
         <div className='flex gap-x-2'>
          <ReactFlagsSelect
            countries={Object.keys(phones)}
            customLabels={phones}
            selected={selected}
            onSelect={(code) => setSelected(code)}
            className='flags-select'
            />
            <label className='flex-1 relative'>
              <input required type="text" className='h-14 w-full bg-white border-2 rounded-lg border-gray-200 transition-colors hover:border-primary-brand-color outline-none focus:border-primary-brand-color px-4 peer text-sm pt-4'/>
              <span className='absolute top-0 left-0 px-4 h-full flex items-center text-sm text-gray-700 transition-all peer-focus:h-8 peer-focus:text-xs peer-focus:text-primary-brand-color  peer-valid:h-8 peer-valid:text-xs peer-valid:text-primary-brand-color'>Telefon Numarası</span>
            </label>
          </div>
          <button className='bg-brand-yellow h-12 text-primary-brand-color text-sm font-semibold w-full flex items-center justify-center rounded-md transition-colors hover:bg-primary-brand-color hover:text-brand-yellow'>Telefon numarası ile devam et</button>
         </div>
         </div>
        </div>
    </div>
  )
}

export default HeroSection