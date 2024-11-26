import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
    <div className="w-full bg-[#ED3604] flex shadow-lg text-xs px-2">
    <div className="w-[1100px] mx-auto flex gap-4 text-white justify-between items-center ">
      {/* Contact Info */}
      <div className="flex gap-5 font-sans">
        <div className="flex gap-2 items-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" width="16" height="16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.581 19.4041C14.6645 19.9894 14.2606 20.5326 13.676 20.6211L12 20.9841C11.6307 21.1187 11.2169 21.0265 10.9398 20.7477C10.6627 20.469 10.5729 20.0546 10.7097 19.6861C10.8466 19.3176 11.1851 19.0623 11.577 19.0321L13.252 18.6701C13.8213 18.509 14.4142 18.8364 14.581 19.4041V19.4041Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15.9919C5.89543 15.9919 5 15.0965 5 13.9919V10.9919C5 9.88737 5.89543 8.99194 7 8.99194C8.10457 8.99194 9 9.88737 9 10.9919V13.9919C9 15.0965 8.10457 15.9919 7 15.9919Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17 15.9919C15.8954 15.9919 15 15.0965 15 13.9919V10.9919C15 9.88737 15.8954 8.99194 17 8.99194C18.1046 8.99194 19 9.88737 19 10.9919V13.9919C19 15.0965 18.1046 15.9919 17 15.9919Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.25 11C18.25 11.4142 18.5858 11.75 19 11.75C19.4142 11.75 19.75 11.4142 19.75 11H18.25ZM4.25 11C4.25 11.4142 4.58579 11.75 5 11.75C5.41421 11.75 5.75 11.4142 5.75 11H4.25ZM19.75 14.0023C19.7513 13.5881 19.4165 13.2513 19.0023 13.25C18.5881 13.2487 18.2513 13.5835 18.25 13.9977L19.75 14.0023ZM13.5113 19.8951C13.1071 19.9855 12.8527 20.3865 12.9431 20.7907C13.0335 21.1949 13.4345 21.4493 13.8387 21.3589L13.5113 19.8951ZM19.75 11V9H18.25V11H19.75ZM19.75 9C19.75 4.71979 16.2802 1.25 12 1.25V2.75C15.4518 2.75 18.25 5.54822 18.25 9H19.75ZM12 1.25C7.71979 1.25 4.25 4.71979 4.25 9H5.75C5.75 5.54822 8.54822 2.75 12 2.75V1.25ZM4.25 9V11H5.75V9H4.25ZM18.25 13.9977C18.2414 16.8289 16.2742 19.2771 13.5113 19.8951L13.8387 21.3589C17.2853 20.588 19.7393 17.534 19.75 14.0023L18.25 13.9977Z" fill="#ffffff">
            </path> 
            </g>
          </svg>
          <p>Tel: 301-814-4883</p>
        </div>
        <span className="h-10 w-0.5 bg-white mx-2"></span>

        <div className="flex gap-2 items-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" width="16" height="16">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                  <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
          </svg>            
          <p>info@mekedoniahomes.org</p>
        </div>
      </div>

      {/* Donate Button */}
      <div className="flex">
        <div className="bg-black">
          <svg fill="#fe2020" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
          <svg fill="#fe2020" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
          <svg fill="#fe2020" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>

        </div>

        <div className="flex text-black bg-[#e1ce0b] transition-all duration-50 ease-in delay-1 px-5 py-3 text-xs font-medium hover:bg-white">
          <a className="whitespace-nowrap">DONATE NOW</a>
        </div>
      </div>
    </div>
  </div>

  {/* Content Section */}
  <div className="flex shadow-md w-full bg-white justify-center text-sm">
    <div className="w-[1100px] flex justify-between text-[#EE4517] font-medium font-sans">
          <div className=" flex py-4 ">
            <img src="https://mekedoniahomes.org/wp-content/uploads/2019/10/logo.png" alt="Mekedonia Homes Logo" width="200" height="150" />
          </div>
          <div className="flex items-center gap-4">

            <Link href = "./pages" className="group relative text-[#646464] active:underline">
                HOME
                <span className="absolute bottom-[-10px] left-0 w-[55px] h-[3px] bg-[#646464] transition-all duration-300"></span>
              </Link>


            <span className="h-5 w-0.5 bg-red-500 "></span>

            <Link href = "../Pages/OurCases" className="group relative hover:text-red-500 active:text-[#646464] active:underline">
              OUR CAUSES
              <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-red-500 active:bg-[#646464] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 transform origin-bottom"></span>
            </Link>

            <span className="h-5 w-0.5 bg-red-500"></span>
            <div className="relative group">
                <a className="relative hover:text-red-500 active:text-[#646464]  ">
                  <div className="flex gap-2 items-center">
                    <p className="text-nowrap">ABOUT US</p>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M7 10L12 15L17 10" stroke="#ea2a2a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                      </svg>
                  </div>
                  <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-red-500 active:bg-[#646464] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 transform origin-bottom"></span>
                </a>

                {/* Dropdown menu */}
                <div className="absolute left-0 mt-2 hidden bg-white border border-gray-300 rounded-md shadow-lg group-hover:block w-full transition-all duration-300 delay-300">
                    <ul className=" text-red-500 text-xs">
                      <li>
                        <a href="#" className="block duration-300 px-4 py-2 text-nowrap text-center hover:bg-red-500 hover:text-white">OUR IMPACT</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 duration-300 text-nowrap text-center hover:bg-red-500 hover:text-white">GALLERY</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-nowrap text-center duration-300 hover:bg-red-500 hover:text-white">MEDIA</a>
                      </li>
                    </ul>
                  </div>
              </div>



            <span className="h-5 w-0.5 bg-red-500 "></span>


            <Link href = "../Pages/JoinUs" className="group relative duration-300  hover:text-red-500 active:text-[#646464] active:underline">
              JOIN US
              <span className="absolute bottom-[-10px] left-0 w-[60px] h-[3px] bg-red-500 active:bg-[#646464] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 transform origin-bottom"></span>
            </Link>

            <span className="h-5 w-0.5 bg-red-500 "></span>

            <a href = "#" className="group relative duration-300 hover:text-red-500 active:text-[#646464] active:underline">
              CONTACT
              <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-red-500 active:bg-[#646464] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 transform origin-bottom"></span>
            </a>


          </div>
    </div>
  </div>
  </div>
  )
}

export default Header