'use client'
import React from 'react'
import Header from '../../Components/Home/Header'
import Contribute from '@/app/Components/Home/Contribute'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// import Joinus from '@/app/Components/OurCauses/JoinUs'
import JoinUsForm from '@/app/Components/OurCauses/JoinUsForm'
import Footer from '@/app/Components/Home/Footer'
import Contact from '@/app/Components/Home/Contact'

const page = () => {
  return (
    <div className='flex flex-col bg-[#F6F6F6] '>
        <Header/>  
        <div className='relative flex h-[405px]  flex-col items-center text-center bg-old-woman-drinking bg-cover bg-center text-white font-vidaloka text-5xl'>
          <div className="absolute inset-0 bg-[#ED3604] bg-opacity-60 z-20 opacity-100"></div>
          <div className='relative z-20 py-36'>
            <p className='text-7xl text-center text-white'>Main Causes</p>
          </div>
          <div className='relative z-20 bg-[#ED3604]  py-3 rounded-t-2xl text-sm px-8 text-ce font-serif'>
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
        <div className="  relative mx-auto flex flex-col h-[600px] text-white bg-cover bg-center bg-help-us justify-center items-center py-32">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
          <div className='flex flex-col  w-[1100px] text-center gap-3 justify-center items-center z-10'>
            <h1 className='font-vidaloka text-5xl pt-[1000px]'>
              Help Our Cause
            </h1>
            <div className='flex flex-col gap-2 text-center font-sans text-lg px-4 justify-center items-center'>
              <div className="w-full h-full bg-black bg-opacity-50"></div>

              <p>
                Each and every person, irrespective of age, education, qualification, present or past experience or location can have a meaningful role to play in supporting and improving the lives of elderly people and those with mental disabilities.
              </p>
              <p className=''>
                “ሰውን ለመርዳት ሰው መሆን በቂ ነው!”
              </p>

              <button className='flex gap-2 text-nowrap bg-[#FF4C00] text-xs px-11 py-5 rounded'>    
                <svg height="16" width="16" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>paypal_line</title>
                    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Brand" transform="translate(-528.000000, -0.000000)">
                        <g id="paypal_line" transform="translate(528.000000, 0.000000)">
                          <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path>
                          <path d="M12.5408,2 C15.3448,2 17.5788,4.01068 18.0844,6.54701 C19.96302,7.511405 21.1207161,9.62399861 20.7308819,11.8543014 L20.685,12.0854 L20.6367,12.3025 C20.0442529,14.9665706 17.7332395,16.8843559 15.0268845,16.9948622 L14.7798,16.9999 L13.3271,16.9999 L12.8101,20.3087 C12.66645,21.2281167 11.9105481,21.919366 10.9968806,21.9933338 L10.8341,21.9999 L8.85838,21.9999 C7.78699818,21.9999 6.93631682,21.1653713 6.86305699,20.146706 L6.85794,20 L5.16841,20 C3.9898468,20 3.07835406,18.9901107 3.17500436,17.8361348 L3.19239,17.6912 L5.24776,4.53687 C5.4668032,3.1349532 6.63477184,2.08673726 8.03553406,2.00512306 L8.21179,2 L12.5408,2 Z M18.0283,8.98651 L18.0192,9.02341 C17.2849,11.9488 14.6552,14 11.6391,14 L9.79341,14 L9.01217,18.9999 L9.01463,18.9999 L8.85838,19.9999 L10.8341,19.9999 L11.3511,16.6912 C11.5032,15.7176 12.3418,14.9999 13.3271,14.9999 L14.7798,14.9999 C16.6544,14.9999 18.2775,13.6981 18.6844,11.8683 L18.7327,11.6512 C18.9554,10.65 18.652,9.67629 18.0283,8.98651 Z M12.5408,4 L8.21179,4 C7.75700846,4 7.36477746,4.30576568 7.24730199,4.73566434 L7.22378,4.84562 L5.16841,18 L7.14414,18 L7.81739,13.6912 C7.96104944,12.7717833 8.71699642,12.080534 9.63063521,12.0065662 L9.79341,12 L11.6391,12 C13.9036,12 15.6017,11.0735 16.1161,9.46897 C16.2019,9.20351 16.2056,8.89299 16.0283,8.58502 C15.4976,7.47426 14.1426,6.52956 12.5408,6.52956 L12.5408,6.52956 L12.5408,4 Z" id="paypal-line" fill-rule="nonzero"> </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                Donate Now
              </button>
              <img width={500} height={500} src = "https://mekedoniahomes.org/wp-content/uploads/2023/02/Payment_Options-1-1-1024x141.png"/>
            {/* <Joinus/> */}
            <JoinUsForm/>

            </div>

          </div>
          <div className='w-full'>
              <Contact/>
              <Footer/>
            </div>
        </div>
      </div>
            
    </div>
  )
}

export default page