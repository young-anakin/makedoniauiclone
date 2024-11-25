import React from 'react'
import Header from '../../Components/Home/Header'
import Contribute from '@/app/Components/Home/Contribute'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Help from '@/app/Components/OurCauses/Help'
import Footer from '@/app/Components/Home/Footer'
import Contact from '@/app/Components/Home/Contact'

const page = () => {
  return (
    <div className='flex flex-col bg-[#F6F6F6] '>
        <Header/>  
        <div className='flex flex-col items-center text-center bg-orange-500 text-white font-vidaloka text-5xl'>
          <div className='py-24'>
            <p>Main Causes</p>
          </div>
          <div className='bg-[#ED3604] py-3 rounded-t-2xl text-sm px-8 text-ce font-serif'>
            <p>Home . Causes</p>
          </div>
        </div>  
        <Contribute/>
        <div className="w-full  flex  gap-1  text-black  pt-20 ">
        <img src = "https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-22-38-768x576.jpg"
        className="w-1/2 object-cover transition-transform duration-300 ease-in-out transform"
        />
        <Accordion type="single" collapsible className="flex w-1/2 flex-col py-36 px-24  gap-8">
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
        <div className='w-full'>
          <Help/>

        </div>
            
    </div>
  )
}

export default page