import React from 'react'

const Landing = () => {
  return (
    <div className="w-[1100px] mx-auto flex flex-col gap-4 text-white justify-start  ">
        
    <h1 className="text-7xl pt-40 font-poppins pr-96 font-bold slide-from-top slide-h1">
        &quot;ሰውን ለመርዳት ሰው መሆን በቂ ነው!&quot;
      </h1>
      <h2 className="text-3xl font-vidaloka slide-from-top slide-h2">
        A Sanctuary of the Poor, the Sick, the Weak and the Friendless
      </h2>
      <a
        href="#"
        className="text-center font-semibold font-lato pr-11 text-base slide-from-top slide-a"
      >
        <div className="flex justify-center text-nowrap bg-[#ED3604] hover:bg-white hover:text-black duration-300 w-44 h-14 items-center">
          <p>OUR STORY</p>
        </div>
      </a>



    </div>
  )
}

export default Landing