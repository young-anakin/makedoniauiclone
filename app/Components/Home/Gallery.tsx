import React from 'react'
import Images from './Images'

const Gallery = () => {
  return (
    <div className="w-[1100px] mx-auto flex flex-col pb-1   text-black justify-center items-center gap-10">
        
        <p className='font-sans text-center text-xl px-36 text-[#191919]'>
        Our needs are not only limited to your financial assistance. You can help by volunteering your time, your labor and your ideas. By leading us to any homeless person you see on the street. Even by hosting your next event at the center to help feed our residents such as Birthdays, Christenings, Weddings, Nika, Melse, Graduations, Zeker, Sedeka, Death anniversaries, and coffee ceremonies.
        </p>

        <p className='text-5xl text-[#ed3604] font-vidaloka px-36 text-center pt-8 pb-16 font-semibold'>
        Additionally, the center also requires
        donations of material needs such as
        </p>

        <div className='flex gap-6 font-vidaloka text-center'>

        <div className="flex flex-col eiffel-tower-background relative px-3 gap-5">
            <div className="absolute inset-0 bg-red-500 opacity-80"></div>
            <h2 className="text-white text-3xl relative z-10 font-semibold">Construction Tools</h2>
            <p className='text-white relative text-lg font-serif'>We require different types of construction materials for the new building which cost 1.2B Birr</p>
        </div>


        <div className="flex flex-col diaper-background relative px-3 gap-5">
            <div className="absolute inset-0 bg-yellow-500 opacity-80"></div>
            <h2 className="text-black text-3xl relative z-10 font-semibold">Adult diapers</h2>
            <p className='text-black relative text-lg font-serif'>We use adult diapers for bed riders and the mentally disabled across our all branches.</p>

        </div>
        <div className="flex flex-col wheelchair-background relative px-3 gap-5">
            <div className="absolute inset-0 bg-[#46B9F4] opacity-80"></div>
            <h2 className="text-white text-3xl relative z-10 font-semibold">Wheel chairs and Durable Medical Equipment</h2>
            <p className='text-white relative text-lg font-serif'>You can donate used and new medical equipment.</p>
        </div>
        <div className="flex flex-col clothes-background relative px-3 gap-5 ">
            <div className="absolute inset-0 bg-[#F48746] opacity-80"></div>
            <h2 className="text-black text-3xl relative z-10 font-semibold">New and gently used clothing and shoes</h2>
            <p className='text-black relative text-lg font-serif'>We use adult diapers for bed riders and the mentally disabled across our all branches.</p>
       
        </div>
        </div>

        <a href = "#" className='border-orange-500 tracking-[10px] font-medium border py-5 px-5 w-[1100px] duration-300 text-center text-[#ED3604] text-2xl hover:text-white hover:bg-[#ED3604]'>
            <p>CONTACT US FOR ITEMS DONATION</p>
        </a>
        
        <div className='pt-10'>
            <p className='text-5xl text-[#ed3604] font-vidaloka px-36 text-center pt-8 pb-16 font-semibold'>
                Our Gallery
            </p>
            <Images/>
        </div>

    </div>
  )
}

export default Gallery