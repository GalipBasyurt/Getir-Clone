import React, { useEffect, useState } from 'react'
import Banners from "../../api/banners.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"


function NextBtn(props) {
    const { className, style, onClick } = props;

    return (

      <button className={`${className} text-purple-700`}  onClick={onClick}>
        {/* <AiOutlineLeft size={22}/> */}
      </button>
     
    );
  }
  
  function PrevBtn(props) {
    const { className, onClick } = props;

    return (
      <button className={`text-brand-color ${className}`} onClick={onClick}>
        {/* <AiOutlineRight size={24}/> */}
      </button>
    );
  }

const Campaigns = () => {
    const [banners, setBanners] = useState([])

    useEffect(()=>{
        setBanners(Banners)
    },[])
    const settings = {
        dots: false,
        autoplay:true,
        infinite: true, 
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,  
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive:[
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
             
            }
          },

          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
             
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
             
            }
          },
        
        ]
      };
  return (
    <div className='container mx-auto md:mt-4'>
            <h3 className='font-semibold text-sm mb-3 hidden md:block'>Kampanyalar</h3>
        <Slider className='md:-mx-2' {...settings}>
          {
            banners && banners?.map((banner)=>(
              <div key={banner?.id}>
                <picture className='md:px-2 block'>
                  <img src={banner?.image} alt="#" className='md:rounded-lg' />
                </picture>
              </div>
            ))
          }
        </Slider>
    </div>
  )
}

export default Campaigns