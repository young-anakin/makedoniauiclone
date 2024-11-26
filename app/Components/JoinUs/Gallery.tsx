import React from 'react'
// import Images from './Images'

const Gallery = () => {
  return (
    <div className="w-[1100px] mx-auto flex flex-col pb-1   text-black justify-center items-center gap-10">
        
        <p className='font-sans text-center text-xl px-36 text-[#191919]'>
        Our needs are not only limited to your financial assistance. You can help by volunteering your time, your labor and your ideas. By leading us to any homeless person you see on the street. Even by hosting your next event at the center to help feed our residents such as Birthdays, Christenings, Weddings, Nika, Melse, Graduations, Zeker, Sedeka, Death anniversaries, and coffee ceremonies.
        </p>

        <p className='text-5xl text-[#ed3604] font-vidaloka px-36 text-center pt-8 pb-16 font-semibold'>
        Additionally, the center also requires
        donations of material needs such as
        </p>

        <div className='flex gap-6 font-vidaloka text-center'>

        <div className="flex flex-col eiffel-tower-background relative px-3 gap-5">
            <div className="absolute inset-0 bg-red-500 opacity-80"></div>
            <h2 className="text-white text-3xl relative z-10 font-semibold">Construction Tools</h2>
            <p className='text-white relative text-lg font-serif'>We require different types of construction materials for the new building which cost 1.2B Birr</p>
        </div>


        <div className="flex flex-col diaper-background relative px-3 gap-5">
            <div className="absolute inset-0 bg-yellow-500 opacity-80"></div>
            <svg className= "relative" height={70} width = {70} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M14.5 8V7.91667C14.5 6.85812 13.6419 6 12.5833 6H11.5C10.3954 6 9.5 6.89543 9.5 8C9.5 9.10457 10.3954 10 11.5 10H12.5C13.6046 10 14.5 10.8954 14.5 12C14.5 13.1046 13.6046 14 12.5 14H11.4583C10.3768 14 9.5 13.1232 9.5 12.0417V12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h2 className="text-black text-3xl relative z-10 font-semibold">Adult diapers</h2>
            <p className='text-black relative text-lg font-serif'>We use adult diapers for bed riders and the mentally disabled across our all branches.</p>

        </div>
        <div className="flex flex-col wheelchair-background relative px-3 gap-5">
            <div className="absolute inset-0 bg-[#46B9F4] opacity-80"></div>
            <svg height = "70" width = "70" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="relative iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M57.931 20.028c1.732-1.752 2.727-4.077 2.727-6.51c0-5.256-4.521-9.532-10.078-9.532c-4.459 0-8.332 2.818-9.62 6.707a49.242 49.242 0 0 0-1.327-.161c-1.929-3.824-5.758-6.142-5.935-6.247L29.867 2l.548 2.887a10.473 10.473 0 0 0-1.774-.597l-5.852-1.32l3.187 3.665h-.073c-.312 0-.487.018-.487.018l-4.586.432a10.345 10.345 0 0 0-7.407-3.099c-5.557 0-10.078 4.276-10.078 9.532c0 2.433.994 4.757 2.725 6.509C3.334 24.285 2 30.06 2 37.603C2 54.844 21.539 62 32 62s30-7.156 30-24.397c0-7.543-1.334-13.317-4.069-17.575m-33.55-9.907c.143.104.279.228.41.369c-.602.06-1.185.127-1.752.203a9.287 9.287 0 0 0-1.279-2.499l2.621 1.927M32 60.066c-9.127 0-28-6.181-28-22.464C4 29.325 5.64 23.6 8.733 19.697c-2.048-1.378-3.388-3.629-3.388-6.179c0-4.196 3.617-7.598 8.078-7.598c4.239 0 7.709 3.073 8.044 6.98c1.982-.363 4.125-.583 6.408-.699c-.444-1.458-1.153-2.795-2.288-3.624c0 0 .114-.009.316-.009c.538 0 1.704.066 3.026.556c0 0 .268-1.791-.742-2.952c0 0 2.625.592 3.943 2.298c0 0 .785-1.128.518-2.54c0 0 4.17 2.488 5.605 6.411c1.496.129 2.924.312 4.278.56c.335-3.907 3.808-6.98 8.048-6.98c4.459 0 8.078 3.401 8.078 7.598c0 2.551-1.342 4.802-3.391 6.18C58.36 23.6 60 29.326 60 37.603c0 16.283-18.872 22.463-28 22.463" fill="#ffffff"></path><path d="M10.925 17.436c2.031-1.723 4.487-2.944 7.339-3.777c.001-.048.015-.092.015-.14c0-2.534-2.173-4.588-4.856-4.588c-2.684 0-4.858 2.054-4.858 4.588c-.001 1.669.951 3.114 2.36 3.917" fill="#ffffff"></path><path d="M53.075 17.437c1.408-.804 2.36-2.249 2.36-3.918c0-2.534-2.175-4.588-4.856-4.588c-2.686 0-4.857 2.054-4.857 4.588c0 .048.013.092.014.14c2.853.833 5.308 2.054 7.339 3.778" fill="#ffffff"></path><path d="M32.038 54.105c-2.295 0-4.156.547-4.156 1.22c0 .092.033.265.099.265h8.096c.077 0 .118-.168.118-.265c-.001-.672-1.86-1.22-4.157-1.22" fill="#ffffff"></path><path d="M23.374 45.493c0 2.755 6.865 5.198 8.626 5.198s8.626-2.443 8.626-5.198c0-3.46-3.861-4.127-8.626-4.127c-4.761 0-8.626.667-8.626 4.127" fill="#ffffff"></path><path d="M57.323 31.613c-4.23.063-8.443.237-12.665.324c-4.22.094-8.444.139-12.663.131a424.25 424.25 0 0 1-12.663-.159a393.251 393.251 0 0 1-6.327-.231a317.682 317.682 0 0 1-6.322-.323c-.043-.004-.089.026-.098.068a.086.086 0 0 0 .069.109l.015.003c2.358.526 4.734.916 7.119 1.23a1.089 1.089 0 0 0-.187.654c0 1.463 1.522 2.65 3.398 2.65c1.864 0 3.373-1.173 3.393-2.622c2.409.184 4.822.302 7.236.371c-4.183 1.525-8.63 5.14-8.63 11.426c0 11.505 5.217 13.862 13.05 13.862c7.831 0 13.047-2.357 13.047-13.862c0-6.281-4.438-9.895-8.617-11.422a163.5 163.5 0 0 0 7.134-.35c.038 1.438 1.538 2.597 3.392 2.597c1.873 0 3.396-1.188 3.396-2.65c0-.248-.059-.426-.141-.578c.256-.029.514-.054.77-.086c1.049-.139 2.104-.277 3.15-.443l1.574-.248l1.572-.268l.02-.004a.094.094 0 0 0 .078-.09c-.002-.049-.046-.089-.1-.089M43.595 45.245c0 10.381-4.234 12.412-11.547 12.412c-7.315 0-11.55-2.031-11.55-12.412c0-7.665 7.522-10.846 11.55-10.846c4.025 0 11.547 3.181 11.547 10.846" fill="#ffffff"></path></g></svg>            <h2 className="text-white text-3xl relative z-10 font-semibold">Wheel chairs and Durable Medical Equipment</h2>
            <p className='text-white relative text-lg font-serif'>You can donate used and new medical equipment.</p>
        </div>
        <div className="flex flex-col clothes-background relative px-3 gap-5 ">
            <div className="absolute inset-0 bg-[#F48746] opacity-80"></div>
            {/* <img src = ""/> */}
            <svg className='relative' height = {70} width = {70} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.45728C4.5 7.13366 6.38366 5.25 8.70728 5.25C9.77775 5.25 10.7533 5.64881 11.4962 6.30708L11.5918 6.39185L11.9753 6.77533L12 6.75349L12.0246 6.77534L12.4081 6.3919L12.5038 6.30708C13.2467 5.64881 14.2222 5.25 15.2927 5.25C17.6163 5.25 19.4999 7.13366 19.4999 9.45728C19.4999 10.524 19.104 11.4963 18.4499 12.2382L18.2646 12.4354L12 18.7L8.03033 14.7303L6.96967 15.791L12 20.8213L19.3416 13.4796L19.5582 13.2492L19.5655 13.241C20.4575 12.2343 20.9999 10.9082 20.9999 9.45728C20.9999 6.30523 18.4447 3.75 15.2927 3.75C14.0969 3.75 12.9859 4.11843 12.0686 4.74733L11.9999 4.67867L11.9313 4.74731C11.014 4.11842 9.90307 3.75 8.70728 3.75C5.55523 3.75 3 6.30523 3 9.45728C3 10.9045 3.53349 12.2379 4.42798 13.2474L5.55066 12.2526C4.89489 11.5125 4.5 10.5314 4.5 9.45728ZM12.75 12.4393L9.75 9.43934L4.93934 14.25H3V15.75H5.56066L9.75 11.5607L12.75 14.5607L15.3107 12H17.25V10.5H14.6893L12.75 12.4393Z" fill="#ffffff"></path> </g></svg>
            <h2 className="text-black text-2xl relative z-10 font-semibold">New and gently used clothing and shoes</h2>
            <p className='text-black relative text-lg font-serif'>We use adult diapers for bed riders and the mentally disabled across our all branches.</p>
       
        </div>
        </div>

        <a href = "#" className='border-orange-500 tracking-[10px] font-medium border py-5 px-5 w-[1100px] duration-300 text-center text-[#ED3604] text-2xl hover:text-white hover:bg-[#ED3604]'>
            <p>CONTACT US FOR ITEMS DONATION</p>
        </a>
        


    </div>
  )
}

export default Gallery