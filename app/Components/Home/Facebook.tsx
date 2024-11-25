import React from 'react'
import FacebookPageEmbed from './FacebookPageEmbed'
import Slider from "react-slick";
// import Stars from "./Stars";
import Logos from "./Logos";
// import Logos from './Logos'

const Facebook = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='flex pt-1 bg-[#F6F6F6]'>
        <div className="w-[1250px] pt-14   mx-auto flex flex-col gap-8 text-white justify-start  ">
            <FacebookPageEmbed/>

            <div className='flex bg-white text-black '>
                <div className='flex'>
                    <h1 className='flex px-8 py-8 text-nowrap bg-[#ED3604] text-white font-vidaloka text-[48px] text-center justify-center items-center'>
                        Donors & Partners</h1>
                    {/* <Logos/> */}
                    <div
                        className="overflow-hidden py-8"
                        style={{ width: "800px", margin: "auto", padding: "" }}
                        >

                        <Slider {...settings}>
                            <div className="flex ">
                                <Logos/>
                            </div>
                            <div className="flex">
                                <Logos/>
                            </div>
                        </Slider>
                    </div>


                </div>
            </div>
        </div>
    </div>
    )
}

export default Facebook