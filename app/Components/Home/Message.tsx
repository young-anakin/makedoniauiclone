import React from 'react'
import Carousel from './Carousel'

const Message = () => {
  return (
    <div className='flex pt-1 bg-[#F6F6F6]'>
    <div className="w-[1100px] pt-14 pb-8  mx-auto flex flex-col gap-8 text-white justify-start  ">
        <h1 className='text-[#ed3604] text-5xl font-vidaloka font-medium'>
            Message from Our Visitors
        </h1>
        <Carousel/>
    </div>
    </div>
  )
}

export default Message