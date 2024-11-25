import React, { useState, ChangeEvent, FormEvent } from "react";
import Help from "./Help";
import Contact from "./Contact";
import Footer from "./Footer";
interface FormData {
    name: string;
    email: string;
    phone: string;
    profession: string;
    message: string;
  }

const Joinus = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        profession: "",
        message: "",
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission logic here (e.g., send to a server)
      };
  return (
    <div>
    <div className=''>
        <div className="w-[1100px] mx-auto flex flex-col gap-1  text-black justify-center items-center pt-20">
            <div className='flex flex-col items-center justify-center gap-6 pb-32'>
                <img height = "80" width = "80" src = "https://mekedoniahomes.org/wp-content/uploads/2021/10/fav.png"/>
                <p className='text-white font-vidaloka text-5xl w-[650px] text-center'>Give Something To The Society
                    Take Back Good Wishes
                </p>
            </div>

            <div className='flex w-[1100px] bg-white mt-44 gap-5 shadow-lg'>
                <div className='flex flex-col pr-12 pl-12  py-12 w-3/5 '>
                    <div className="flex w-[600px] mr-11">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full bg-white p-8 "
                            >
                                <div className='flex gap-2 pb-4'>
                                <div className='w-[2px] bg-red-500'></div>
                                <p className='text-red-500 text-lg font-sans font-medium'> JOIN US</p>
                                </div>
                                <p className='text-black text-5xl text-nowrap font-semibold font-vidaloka pb-8'>To make a change!</p>
                                {/* <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2> */}
                                <div className="flex mb-4 gap-5">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full  border border-red-500 px-5 py-3 text-base"
                                    required
                                    placeholder='Name'
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full  border border-red-500 px-5 py-3 text-base"
                                    required
                                    placeholder='Email'
                                />
                                </div>
                                <div className="flex mb-4 gap-5">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full  border border-red-500 px-5 py-3 text-base"
                                    required
                                    placeholder='Phone Number'
                                />
                                <input
                                    type="text"
                                    name="profession"
                                    id="profession"
                                    value={formData.profession}
                                    onChange={handleChange}
                                    placeholder='Your Profession'
                                    className="mt-1 block w-full  border border-red-500 px-5 py-3 text-base"
                                />
                                </div>
                                <div className="mb-4">

                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Message'
                                    className="mt-1 block w-full h-[100px]  border border-red-500 px-5 py-3 text-base"
                                ></textarea>
                                </div>
                                <button
                                type="submit"
                                className="flex gap-2 font-vidaloka rounded text-center duration-300 items-center justify-center w-full bg-[#ed3604] text-white py-4 px-4 text-2xl hover:bg-[#E1CE0B]"
                                >
                                SIGN UP
                                <svg width = "30" height = "30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </button>
                            </form>

                            </div>
                </div>
                <div className='w-2/5 h-300'>
                    <img className = "items-end"  height = "320" src = "https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00460-scaled-e1677245676198-1162x1536.jpg"/>
                </div>

            </div>
        </div>
    </div>
    <Help/>
    <Contact/>
    <Footer/>

    </div>
  )
}

export default Joinus