import React from 'react'

const MobileApp = () => {
  return (
    <div className='container  mx-auto bg-primary-brand-color  rounded-md mt-6 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex flex-col  gap-y-3 p-10 text-center md:text-left'>
        <h3 className='text-2xl font-bold text-white tracking-tighter'>Getir'i indirin!</h3>
        <p className='text-lg font-semibold text-white'>İstediğiniz ürünleri dakikalar içinde kapınıza  getirelim.</p>
        <nav className='mt-5 flex flex-wrap lg:flex-nowrap  justify-center gap-2 '>
          <a href="#">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" className='md:h-12 lg:h-auto'/>
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" className='h-12 lg:h-auto'/>
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" className='h-12 lg:h-auto'/>
          </a>
        </nav>
      </div>
      <figure className=' self-end pt-6 hidden md:block lg:pt-12'>
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
      </figure>
    </div>
  )
}

export default MobileApp