import React from 'react'

const Contribute = () => {
  return (
    <div className='bg-[#F6F6F6] pb-32 mb-32'>
    <div className="w-[1300px] mx-auto flex flex-col gap-1  text-black justify-center items-center pt-20">
          <img height = "100" width = "100" className = "opacity-25" src="https://mekedoniahomes.org/wp-content/uploads/2019/10/cropped-fav-150x150.png" alt = "mekedoniya"></img>
          <p className='text-6xl font-vidaloka pb-24'>
            Contribute for our Causes
          </p>

          <div className='flex gap-3'>
              {/* Individual Elements */}
              <div className='flex flex-col bg-white w-[600px]'>
                <img height = "800" width = "600" className='rounded-t'
                src = "https://mekedoniahomes.org/wp-content/uploads/2023/06/Mekedonia-Woman-Bed-Riders-1024x683.jpg"/>

                <div className='mx-10 pt-10 text-wrap text-lg gap-36'>
                  {/* Title */}
                  <a href="#" className='text-3xl font-vidaloka py-12 hover:text-red-500'>
                    Incontinence supplies
                  </a>

                  {/* Red Line */}
                  <div className="w-full h-2 bg-[#F6F6F6] rounded-2xl my-6">
                    <div
                      className="top-0 left-0 h-full bg-red-500 rounded-2xl"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  {/* Paragraph */}
                  <div className='flex flex-col'>
                    <p className='font-serif text-gray-500 pt-4'>
                      Kindly Donate to help us provide severely needed incontinence supplies, including diapers, bed pads, gloves, and more to our 2500 bedridden and mental disabled residents.
                    </p>
                  </div>
                </div>

                <div className='flex justify-between mx-10 pt-5'>

                  <div className=' '>
                    <img width ="250" height = "100" src = "https://mekedoniahomes.org/wp-content/uploads/2023/06/Minimal-Credit-Card-Icons-02-1024x178.png"/>
                  </div>

                  <a href = "#" className='flex gap-3 font-semibold text-nowrap items-center mx-5 rounded px-6 bg-[#ED3604] text-center py-3 text-white  hover:-translate-y-1 transition-transform duration-200'>
                    <svg width = "20" height = "20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V17.25L3.75 18H19.5L20.25 17.25V6L19.5 5.25H3.75ZM4.5 9V6.75H18.75V9H4.5ZM4.5 10.5V16.5H18.75V10.5H4.5ZM6.10217 14.25H7.67035V12.75H6.10217V14.25ZM13.1589 14.25H8.45435V12.75H13.1589V14.25Z" fill="#ffffff"></path> </g></svg>
                    DONATE NOW!
                  </a>
                </div>

              </div>

              <div className='flex flex-col bg-white w-[600px]'>
                <img height = "800" width = "600" className='rounded-t'
                src = "https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00379-2048x1365.jpg"/>

                      <div className='mx-10 pt-10 text-wrap text-lg gap-36'>
                        {/* Title */}
                        <a href="#" className='text-3xl font-vidaloka py-12 hover:text-red-500'>
                          Building Our New Home
                        </a>

                        {/* Red Line */}
                        <div className="w-full h-2 bg-[#F6F6F6] rounded-2xl my-6">
                          <div
                            className="top-0 left-0 h-full bg-red-500 rounded-2xl"
                            style={{ width: "80%" }}
                          ></div>
                        </div>

                        {/* Paragraph */}
                        <div className='flex flex-col pb-2'>
                          <p className='font-serif text-gray-500 pt-4'>
                          Kindly help us build a home for the homeless, bed riders, elders, physically impaired, visually impaired, and for bed riders. Every gift matters! By doing so you will build your heavenly home!                          </p>
                        </div>
                      </div>

                      <div className='flex justify-between mx-10 pb-16'>

                        <div className=' pt-5'>
                          <img width ="90" height = "100" src = "https://mekedoniahomes.org/wp-content/uploads/2023/06/gofundme-greenhouse-300x156.png"/>
                        </div>

                        <a href = "#" className='flex gap-3 font-semibold text-nowrap items-center mx-3 rounded px-5 bg-[#ED3604] text-center my-3 text-white  hover:-translate-y-1 transition-transform duration-200'>
                          <svg
                            className='h-5'
                            version="1.1"
                            id="Icons"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="16" y1="6" x2="16" y2="7" />
                            <line x1="16" y1="13" x2="16" y2="14" />
                            <path d="M17,7h-1.5C14.7,7,14,7.7,14,8.5v0c0,0.8,0.7,1.5,1.5,1.5h1c0.8,0,1.5,0.7,1.5,1.5v0c0,0.8-0.7,1.5-1.5,1.5H15" />
                            <circle cx="16" cy="10" r="7" />
                            <line x1="16" y1="29" x2="16" y2="17" />
                            <path d="M14,22c2.5,2.5,2,7,2,7s-4.5,0.5-7-2s-2-7-2-7S11.5,19.5,14,22z" />
                            <path d="M18,22c-2.5,2.5-2,7-2,7s4.5,0.5,7-2s2-7,2-7S20.5,19.5,18,22z" />
                          </svg>

                          DONATE NOW!
                        </a>
                      </div>

              </div>
          </div>
    </div>
    </div>
  )
}

export default Contribute