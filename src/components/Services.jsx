import React from 'react'
// import some icons
import {BsShieldFillCheck} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeart2Fill} from 'react-icons/ri';

const ServiceCard =({color,title,icon,subtitle}) =>(
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h3 className='mt-2 text-white text-lg'>{title}</h3>
      <p className='mt-2 text-white text-sm sm:w-9/12'>{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className='flex w-full justify-center items-center gradient-bg-services'>
      {/* +++ services H1 tag +++ */}
      <div className='flex md:flex-row flex-col items-center justify-between md:p-20 px-4 py-12'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>Services that we <br />continue to importve</h1>
        </div>
      </div>
      {/* --- services H1 tag --- */}
      {/* +++services card+++ */}
      <div className='flex-1 flex flex-col justify-start items-center'>
        <ServiceCard 
          color="bg-[#2952e3]"
          title="Secuirity Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className='text-white'/>}
          subtitle="security is guaranted. We always maintained our privacy"
        />
        <ServiceCard 
          color="bg-[#2952e3]"
          title="Best Exchange rate"
          icon={<BiSearchAlt fontSize={21} className='text-white'/>}
          subtitle="lorem ipsum dolor sit amet lorem ipsum dorlor sit amet"
        />
        <ServiceCard 
          color="bg-[#2952e3]"
          title="Fastest Transaction"
          icon={<RiHeart2Fill fontSize={21} className='text-white'/>}
          subtitle="lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        />
      </div>
      
      {/* ---services card--- */}
    </div>
    
  )
}

export default Services