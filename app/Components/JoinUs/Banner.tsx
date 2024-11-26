'use client'
import React from 'react'
// import Counter from '../Home/Counter'
import Numbers from '../Home/Numbers'
import Help from '../Home/Help'
import Gallery from './Gallery'
import JoinUsForm from './JoinUsForm'
import Contact from '../Home/Contact'
import Footer from '../Home/Footer'

const banner = () => {
  return (
    <div>
        <div className='relative flex h-[400px] items-center justify-center text-center bg-art-room-drawing bg-cover bg-center text-white'>
            <div className="absolute inset-0 bg-[#ED3604] bg-opacity-60 z-20 opacity-100"></div>
                <div className='relative z-20 py-36'>        
                    <p className='font-vidaloka text-7xl'>
                        Join us
                    </p>
                </div>
        </div>
        <div className='flex w-[600px] pt-28 mx-auto flex-col font-sans text-xl text-center items-center justify-center'>
            <h1>
            As A Non-Profit Organization, All Mekedonia Homes Expenses Are Funded By Contributions And Rely On Financial Contributions From Various Organizations And Individuals. Mekedonia Homes Typical Expenses Are The Following: 
            </h1>
        </div>

        <div className='w-[900px] mx-auto flex font-sans pt-16 font-medium'>
            <div className='relative bg-construction bg-center bg-cover flex flex-col text-center text-white py-10 px-12'>
                <div className="absolute inset-0 bg-[#ED3604] bg-opacity-80 z-20 opacity-100"></div>
                <h1 className=' relative z-20 font-vidaloka text-2xl'>Daily Expense</h1>
                <h2 className=' relative z-20 text-2xl pt-5 pb-3'>$3 / PERSON</h2>
                <p className='relative z-20 '>That means 100 Birr will be the daily expense of one person at Mekedonia.</p>
            </div>
            <div className='relative bg-construction bg-center bg-cover text-center text-black py-10 px-12'>
                <div className="absolute inset-0 bg-yellow-400 bg-opacity-80 z-20 opacity-100"></div>
                
                <h1 className='relative z-20 font-vidaloka text-2xl'>Monthly Expense</h1>
                <h2 className='relative z-20 text-2xl pt-5 pb-3'>$90 / Person</h2>
                <p className='relative z-20 '>That means 4950 Birr will be the monthly expense of one person at Mekedonia.</p>
            </div>
            <div className='relative bg-construction bg-center bg-cover text-center text-white py-10 px-12'>
                <div className="absolute inset-0 bg-[#DF7231] bg-opacity-80 z-20 opacity-100"></div>
                <h1 className='relative z-20 font-vidaloka text-2xl'>Yearly Expense</h1>
                <h2 className='relative z-20 text-2xl pt-5 pb-3'>$1080 / Person</h2>
                <p className='relative z-20 '>That means 59,400 Birr will be the yearly expense of one person at Mekedonia.</p>
            </div>
        </div>

        <Numbers/>
        <div className='flex items-center pt-10 justify-center flex-col mx-auto w-[600px] text-[#191919] text-center'>
            <h1 className='text-5xl font-semibold font-vidaloka'>Donation Methods.</h1>
            <p className='text-xl pt-4 font-sans'>You can use the below methods to send your donations!
            For further assistance in USA please call: (301) 814-4883</p>
        </div>

        <div className='w-[1200px] mx-auto py-16'>
            <div className='flex gap-4'>
                <div className='relative flex flex-col items-center bg-clothes bg-cover  w-[550px] py-14 text-white text-center'>
                    <div className="absolute inset-0 bg-[#ED3604] bg-opacity-90 z-20 opacity-100"></div>
                    
                    <h1 className='relative z-20 font-vidaloka text-3xl pb-5 '>Online Donation</h1>
                    <img height = "250" width = "250" className='relative z-20 pb-10' src = "https://mekedoniahomes.org/wp-content/uploads/2023/06/Minimal-Credit-Card-Icons-02-1024x178.png"/>
                    <div className='relative z-20 flex gap-3 items-center justify-center text-nowrap bg-[#e1ce0b] py-3 px-10 rounded hover:bg-white hover:text-red-500 duration-300'>
                    <svg height={20} width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2.32803 6.01511 2.09185 7.22882 2.02572 9.25H21.9743C21.9082 7.22882 21.672 6.01511 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z" fill="#000000"></path> <path d="M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 11.5581 22 11.142 21.9981 10.75H2.00189C2 11.142 2 11.5581 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 16C11.75 15.5858 12.0858 15.25 12.5 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H12.5C12.0858 16.75 11.75 16.4142 11.75 16Z" fill="white"></path> </g></svg>
                        <p className='font-vidaloka text-black relative z-20 '>Donate Now!</p>
                    </div>
                </div>
                <div className='relative bg-reading bg-center  text-white text-center rounded py-14 w-[550px]'>
                    <div className="absolute inset-0 bg-[#ED3604] bg-opacity-90 z-20 opacity-100"></div>
                        <div className='relative z-20'>
                            <h1 className='font-vidaloka text-3xl  pb-5'>U.S.A</h1>
                            <div className='flex flex-col text-xl gap-3'>
                                <div>
                                    <h1>Mekedonia Charity Homes</h1>
                                    <h1>Wells Fargo Bank Account #6089212333</h1>
                                </div>
                                <div className='font-semibold'>
                                    <h1>Zelle - 240-938-2992</h1>
                                    <h1>Cash App - 240-938-2992</h1>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

        </div>
        <Help/>
        <div className='py-16'></div>
        <Gallery/>
        <div className='mx-auto w-[1100px] pt-20'>
            <JoinUsForm/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default banner
