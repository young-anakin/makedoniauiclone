import React from 'react'

const Contribute = () => {
  return (
    <div className='bg-[#F6F6F6]'>
    <div className="w-[1400px] mx-auto flex flex-col gap-1  text-black justify-center items-center pt-28">
          <img height = "100" width = "100" className = "opacity-25" src="https://mekedoniahomes.org/wp-content/uploads/2019/10/cropped-fav-150x150.png" alt = "mekedoniya"></img>
          <p className='text-6xl font-vidaloka font-semibold pb-24'>
            Contribute for our Causes
          </p>

          <div className='flex gap-3'>
              {/* Individual Elements */}
              <div className='flex flex-col bg-white'>
                <img height = "800" width = "800" className='rounded-t'
                src = "https://mekedoniahomes.org/wp-content/uploads/2023/06/Mekedonia-Woman-Bed-Riders-1024x683.jpg"/>
                <div className=' pt-16 text-wrap text-lg'>
                  <a href = "#" className='text-4xl font-vidaloka pt-12 font-semibold hover:text-red-500 '>Incontinence supplies</a>
                  <div className="w-full h-2 bg-[#F6F6F6] relative rounded-2xl">
                    <div className="absolute top-0 left-0 h-full bg-red-500 rounded-2xl" style={{ width: "65%" }}></div>
                  </div>
                  <div className='flex flex-col text-center px-20'>
                    <p className='font-serif text-gray-500'>
                        Kindly Donate to help us provide severely needed incontinence supplies, including diapers, bed pads, gloves, and more to our 2500 bedridden and mental disabled residents.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col bg-white'>
                <img height = "800" width = "800" className='rounded-t'
                src = "https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00379-2048x1365.jpg"/>
                <a href = "#" className='text-4xl font-vidaloka pt-12 font-semibold hover:text-red-500'>Building Our New Home                </a>

              </div>
          </div>
    </div>
    </div>
  )
}

export default Contribute