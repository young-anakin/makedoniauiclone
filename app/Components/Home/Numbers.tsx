import React from 'react'
import Counter from './Counter'

const Numbers = () => {
  return (
    <div className=" text-nowrap text-center text-[#ed3604] w-[1100px] mx-auto flex  text-4xl  items-center pt-16 pb-20 ">
    <div className = "flex ">
      <div className="flex flex-col px-10">
        <Counter target = {3100} />
        <p className="text-gray-500 text-base">Elders</p>
      </div>
      <span className=" h-15 w-0.5 bg-black"></span> {/* Updated span width */}
    </div>

    <div className = "flex">
      <div className="flex flex-col px-10">
        <Counter target = {1450} />
        <p className="text-gray-500 text-base">Bed Riders
        </p>
      </div>
      <span className=" h-15 w-0.5 bg-black"></span> {/* Updated span width */}
    </div>


    <div className = "flex">
      <div className="flex flex-col px-10">
        <Counter target = {1560} />
        <p className="text-gray-500 text-base">Mentally Disabled
        </p>
      </div>
      <span className=" h-15 w-0.5 bg-black"></span> {/* Updated span width */}
    </div>

    <div className = "flex">
      <div className="flex flex-col px-10">
        <Counter target = {1190} />
        <p className="text-gray-500 text-base">Physically Imperilment
        </p>
      </div>
      <span className=" h-15 w-0.5 bg-black"></span> {/* Updated span width */}

    </div>

    <div className = "flex justify-between ">
      <div className="flex flex-col px-10">
        <Counter target = {200} />
        <p className="text-gray-500 text-base">Visually Imperilment</p>
      </div>
      <span className=" h-15 w-0.5 bg-black"></span> {/* Updated span width */}
    </div>

    <div className = "flex justify-between">
      <div className="flex flex-col px-10">
        <Counter target = {7500} />
        <p className="text-gray-500 text-base">Total</p>
      </div>
    </div>
</div>
  )
}

export default Numbers