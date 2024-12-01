import Contact from '@/app/Components/Home/Contact'
import Footer from '@/app/Components/Home/Footer'
import Header from '@/app/Components/Home/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <div className='flex flex-col w-[1100px] mx-auto text-[#ed3604] font-vidaloka text-[29px]'>
            <p className='font-vidaloka text-[48px] pt-5 '>Our Media</p>
            <div className='flex flex-col gap-12'>

            <div className='flex gap-10'>
                <div className='flex flex-col gap-5'>
                    <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/Ei2y5aAypO4?si=CF_gnbOQDlmrn2Co" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>መቄዶንያን እኔ አልመሰረትኩትም</p>
                </div>
                <div>
                    <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/nQG59GA54eo?si=On1_t2dz6zNfhFZH" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>&quot;ሰጥቶ የከሰረ አካፍሎ የጎደለበት የለም&quot;</p>
                </div>
            </div>


            <div className='flex gap-10'>
                <div className='flex flex-col gap-5'>
                <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/wj6J4O4qL6s" title="Ethiopia: Mereja Daily News|ህዝቡን ያሳዘነ ጉዳይ በመቆዶኒያ ያልተጠበቀ ክስተት" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>በመቄዶንያ የጥምቀት ልዩ ፕሮግራም</p>
                </div>
                <div>
                <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/WDy_QCUfWBk" title="ቢንያም በለጠ (ሜቄዶንያ) በማን ከማን ከመሳይ ጋር ሾው ክፍል 1]Biniam Belete (Mekedonia)[On Man Ke Man with Messay Show]" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>ቢንያም በለጠ (መቄዶንያ) በማን ከማን ከመሳይ ጋር ሾው</p>
                </div>
            </div>

            <div className='flex gap-10'>
                <div className='flex flex-col gap-5'>
                <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/LnfU0vNPEfU" title="Ethiopia-የኔ ጤና በኢትጵያውያን እጅ ነው የሜቄዶንያ መስራች ቢኒያም በለጠ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Interview with the founder of Makedonia Benyam Belete</p>
                </div>
                <div>
                    <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/nW7qyi_pQZk?si=WSGZ0JWOIulOytzx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Prime Minister Dr. Abiy Ahmed Visit</p>
                </div>
            </div>

            <div className='flex gap-10 pb-12'>
                <div className='flex flex-col gap-5'>
                <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/rozi6E6HFgk" title="First Lady Zenash Tayachew and Vice Mayor Dagmawit Moges Visited Macedonia Humanitarian Association" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>ሰውን ለመርዳት ሰው መሆን በቂ ነው!</p>
                </div>
                <div>
                <iframe className='border-4 rounded-xl border-red-500' width="560" height="315" src="https://www.youtube.com/embed/nW7qyi_pQZk?si=WSGZ0JWOIulOytzx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Prime Minister Dr. Abiy Ahmed Visit</p>
                </div>
            </div>

            
            </div>

        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page