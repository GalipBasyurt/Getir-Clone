import React,{useState,useEffect} from 'react'
import {Collapse} from 'react-collapse';
import { useWindowWidth} from '@react-hook/window-size'
import {IoIosArrowDown} from "react-icons/io"
const FooterComp = ({menu}) => {
  const [open, setOpen] = useState(true)
  const windowWidth = useWindowWidth()
  const toggleCollapse = ()=>{
    if(windowWidth<=768){
      setOpen(!open)
    }
  }

  useEffect(()=>{
    if(open&&windowWidth<=768){
      setOpen(false)
    }
    if(open&&windowWidth>=768){
      setOpen(true)
    }
  },[windowWidth])
  return (
    <div>
           <section className='col-span-1'>
          <nav className='grid gap-y-4'>
            <h5 onClick={toggleCollapse} className='text-lg text-primary-brand-color flex items-center justify-between'>
              {menu.title}
              <button className='w-6 h-6 bg-primary-brand-color bg-opacity-10 text-brand-color rounded-md flex items-center justify-center md:hidden collapse-btn'>
                <span className={`transition-all transform ${open ? "rotate-180" : ""}`}>
                <IoIosArrowDown size={20}/>
                </span>
              </button>
              </h5>
            <Collapse isOpened={open}>
             <nav className='md:-mt-2 -mt-3'> 
                <ul>
                    {
                        menu.items.map((item,index)=>(
                            <li className='mb-2' key={index}>
                                <a className='text-sm hover:text-primary-brand-color transition-colors' href="#">{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
             </nav>
             </Collapse>
          </nav>
        </section> 
    </div>
  )
}

export default FooterComp