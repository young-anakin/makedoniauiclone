"use client"
import Header from '@/app/Components/Home/Header'
import Infomertial from '@/app/Components/Home/Infomertial'
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ImageSlider from '@/app/Components/OurImpact/ImageSlider'
import Help from '@/app/Components/Home/Help'
import Footer from '@/app/Components/Home/Footer'
import Contact from '@/app/Components/Home/Contact'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoId = "tuWseQ4inxw"; // Video ID from the YouTube URL
  const videoUrl1 = `https://www.youtube.com/embed/${videoId}`;
  // const videoUrl1 = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with your YouTube video ID
  // const videoUrl2 = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with your YouTube video ID

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };
  return (
    
    <div>
        <Header/>
        <div className='relative w-full bg-fetlet bg-center bg-cover h-[450px]'>
           <div className="absolute inset-0 bg-[#ED3604] bg-opacity-60 z-20 opacity-100"></div>
           <div className='relative z-20 py-36'>
            <h1 className='text-7xl text-center text-white font-vidaloka'>Our Impact</h1>
            </div>
        </div>

        <div className='flex w-[1200px] mx-auto py-24 gap-10'>
          <div className='w-1/2'>
            <img className='rounded-2xl' src = "https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00372-1024x683.jpg"/>
          </div>
          <div className='w-1/2 pt-10 font-sans text-xl flex'>
            <p>Mekedonia&apos;s beneficiaries are homeless people picked up from different parts of the country such as Hawassa, Debre Zeit, Debre Libanos, Addis Ababa and Guder. We are proud to be an Ethiopian resident charity with our headquarters located in Addis Ababa, Ethiopia. In addition to Addis Ababa, Mekedonia Homes has several branches located in other regions throughout Ethiopia, including Harar, Gore, Dire Dawa, Adama, Gambella, Shashemane, Beke, and Adwa.</p>
          </div>
        </div>


        <div className='bg-[#F6F6F6] pt-32'>
          <div className='bg-[#F6F6F6] flex w-[1200px] mx-auto'>
              <div className='flex flex-col w-1/2'>
                  <h1 className='font-vidaloka text-[#ed3604] text-[48px] font-medium'>Our Successes</h1>
                  <p className='font-sans text-[#646464] text-[16px] leading-7 pt-6'>Over the past years more than 400 Elderly and Mentally handicapped residents have been successfully rehabilitated and have become productive employees of the Home. Some are working as Security Guards, Caregivers, Sanitation Workers, Drivers, Hostesses, Cashiers, Tour Guides, and in Food preparation. Others have been trained to work as Laboratory Technicians, Welders, Cement workers, Carpenters, or Wood Workers. Additionally, some have learned weaving, sewing, tapestry & carpet making, broom & mop production even raising chickens. Others are working as Supervisors, Construction experts, Business administrators, etc.</p>

                  <div className='flex pt-12'>
                    <div className='flex flex-col w-1/2'>
                      <h1 className='font-vidaloka text-[#ed3604] text-[48px] font-medium'>400</h1>
                      <p className='font-sans text-[#646464] text-[16px] leading-7'>Elderly and Mentally handicapped residents have been successfully rehabilitated and have become productive employees of the Home.</p>
                    </div>

                    <div className='flex flex-col w-1/2'>
                      <h1 className='font-vidaloka text-[#ed3604] text-[48px] font-medium'>300+</h1>
                      <p className='font-sans text-[#646464] text-[16px] leading-7'>of our patients have been able to return home and or to their previous lives and jobs just through the support provided by the organization.</p>
                    </div>

                  </div>

              </div>

              <div className='w-1/2'>



              <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
                    {!isVideoVisible ? (
                      <img
                        src="https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00472-1024x683.jpg" // This is the YouTube video thumbnail
                        alt="Video Thumbnail"
                        style={{ width: '100%', cursor: 'pointer' }}
                        onClick={handleThumbnailClick}
                      />
                    ) : (
                      <iframe
                        width="100%"
                        height="400"
                        src={videoUrl1}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>



              </div>
          </div>
        </div>

        <div className='bg-[#F6F6F6] py-32'>
          <div className='bg-[#F6F6F6] flex w-[1200px] mx-auto gap-8'>
              <div className='flex flex-col w-1/2'>
                  <h1 className='font-vidaloka text-[#ed3604] text-[48px] font-medium'>Our Accomplishments</h1>
                  <p className='font-sans text-[#646464] text-[16px] leading-7 pt-6'>
                  We were able to build our center quickly and move our patients to the 30 thousand square foot land that was donated to us located next to the Ayat Condominiums which are owned and operated by the City of Addis Abeba. We have orchestrated tours for many volunteer groups, students, employees, spiritual leaders, government officials, and other members of the community to see what we do and be a part of our mission. We have organized events such as Birthdays, Christenings, Weddings, Nika, Melse, Graduations, Zeker, Sedeka, Death anniversaries, and much more to be able to have the community join us in the challenge of providing the needs of our residents. We have assisted our residents to get exceptionally good health care including but not limited to open heart surgeries by using our own clinic, and government hospitals and even paying the high cost of the most expensive private hospitals such as the Korean Hospital. We have partnered with Amanuel Specialized Mental Hospital to assist mentally disabled residents to get the appropriate treatment and return to full health. Because of that, some of them are returning back to the workforce. We provided Physiotherapy, Psychotherapy, Massage therapy, and other medical treatments.
                  </p>


              </div>

              <div className='flex w-1/2 items-end justify-end'>
              <div style={{ position: 'relative', width: '100%', maxWidth: '500px', maxHeight : "600px"}}>
                    {!isVideoVisible ? (
                      <img
                        className='rounded-xl'
                        height = "300"
                        width = "300"
                        src="https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-23-02-768x576.jpg" // This is the YouTube video thumbnail
                        alt="Video Thumbnail"
                        style={{ width: '100%', cursor: 'pointer' }}
                        onClick={handleThumbnailClick}
                      />
                    ) : (
                      <iframe
                        width="100%"
                        height="400"
                        src={videoUrl1}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
              </div>
          </div>
        </div>

        <div className='flex flex-col w-[1200px] text-center mx-auto gap-20'>
          <h1 className='text-[#191919] font-vidaloka text-[48px] pt-32  font-semibold'>Lets Create A Better Future together!          </h1>
          <Infomertial/>      
        </div>
        <div className="w-full  flex    text-black  pt-20  ">
        <img src = "https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-22-38-768x576.jpg"
        className="w-1/2 object-cover transition-transform duration-300 ease-in-out transform"
        />
        <Accordion type="single" collapsible className="flex bg-[#F6F6F6] w-1/2 flex-col py-36 px-24  gap-8">
          <h1 className='font-vidaloka text-5xl font-medium'>Frequently Asked Questions! </h1>
          <AccordionItem value="item-1">
            <AccordionTrigger>WHERE ARE YOU LOCATED?</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-3 font-sans text-[#646464]'>
              <p>In front of Ayat Medhanialem Church, Addis Ababa, Ethiopia</p>
              <p>Open for Vistors</p>
              <p>Monday - Sunday - 6:00 am - 6:00 pm</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>HOW CAN I DONATE?</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-[#646464] font-sans'>
              <p>If you reside in Ethiopia and want to assist us using your cell phones, please send a free text message to 8161 Option 1 to become a member. </p>
              <p>Bank account information:</p>
              <p>Mekedonia Home for Elderly & Mentally Disabled </p>
              <p>Dashen Bank Megenagna Branch </p>
              <p>Account # 0025658566001, Swfit DASHETTA</p>
              <p>Mekedonia Home for Elderly & Mentally Disabled </p>
              <p>Commercial Bank of Ethiopia, Silassie Branch </p>
              <p>Account # 1000067118948 Swift; CBETETAA</p>


            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>

        <div className='text-center w-[1200px] mx-auto pt-40'>
          <h1 className='font-vidaloka text-[48px] text-[#191919]'>Our Donors & Partners</h1>
                    <div
                        className="overflow-hidden pb-32 pt-12"
                        style={{ width: "800px", margin: "auto", padding: "" }}
                        >

                        <ImageSlider />
                    </div>
        </div>

        <Help/>
        <Contact/>

        <Footer/>
    </div>
  )
}

export default page
