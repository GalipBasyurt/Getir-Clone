import React from 'react'
import FooterComp from './FooterComp'
import {BsFacebook, BsLinkedin, BsTwitter} from "react-icons/bs"
import {AiOutlineGlobal} from "react-icons/ai"

const Footer = () => {

const menus = [
  {
    title: "Getir'i keşfedin",
    items:[
      {
        title: "Hakkımızda"
      },
       {
        title: "Kariyer"
      },
       {
        title: "Teknoloji Kariyerleri"
      },
       {
        title: "İletişim"
      },
       {
        title: "Sosyal Sorumluluk Projeleri"
      },
    ]
  },
  {
    title: "Yardıma mı ihtiyacınız var?",
    items:[
      {
        title: "Sıkça Sorulan Sorular"
      },
       {
        title: "Kişisel Verilerin Korunması"
      },
       {
        title: "Gizlilik Politikası"
      },
       {
        title: "Kullanım Koşulları"
      },
       {
        title: "Çerez Politikası"
      },
      {
        title: "İşlem Rehberi"
      },
      
    ]
  },{
    title: "İş Ortağımız Olun",
    items:[
      {
        title: "Bayimiz Olun"
      },
       {
        title: "Deponuzu Kiralayın"
      },
       {
        title: "GetirYemek Restoranı Olun"
      },
       {
        title: "GetirÇarşı İşletmecisi Olun"
      },
       {
        title: "Zincir Restoranlar"
      },
    ]
  }
]

  return (
    <footer className='bg-white mt-10'>
      <div className='container mx-auto px-6 md:px-0'>
       <div className='grid md:grid-cols-2 gap-y-6 lg:grid-cols-4 md:pt-10 pt-5'>
        <section className='col-span-1'>
          <nav className='grid gap-y-4'>
            <h5 className='text-lg text-primary-brand-color'>Getir'i indirin!</h5>
            <a href="#">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
            </a>
          </nav>
        </section> 
        {
          menus?.map((menu, index)=>(
            <FooterComp key={index} menu={menu}/>
          ))
        }
       </div>
       <div className='border-t border-gray-200 py-4 mt-6 flex items-center justify-center md:justify-between md:flex-row flex-col gap-y-4'>
        <div className='text-xs flex items-center gap-x-4'>
          <p>&copy; 2023 Getir</p>
          <a className='text-primary-brand-color' href="#">Bilgi Toplumu Hizmetkeri</a>
        </div>
        <div className='-mr-2 flex items-center gap-x-3'>
         <nav className='flex items-center gap-x-1 text-gray-60'>
          <a href="#" className='transition-all hover:bg-purple-50 hover:text-primary-brand-color p-2 rounded-lg'>
            <BsFacebook size={20}/>
          </a>
          <a href="#" className='transition-all hover:bg-purple-50 hover:text-primary-brand-color p-2 rounded-lg'>
            <BsTwitter size={20}/>
          </a>
          <a href="#" className='transition-all hover:bg-purple-50 hover:text-primary-brand-color p-2 rounded-lg'>
            <BsLinkedin size={20}/>
          </a>
         </nav>
         <button className='flex items-center gap-x-2 text-gray-600 text-xs border p-1 rounded-lg border-purple-50 transition-all hover:bg-purple-50 hover:text-primary-brand-color'>
          <AiOutlineGlobal size={22}/> Türkçe (TR)
         </button>
        </div>
       </div>
      </div>
    </footer>
  )
}

export default Footer