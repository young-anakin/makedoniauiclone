import React from 'react'

const Contact = () => {
  return (
    <div className="relative mx-auto flex flex-col text-white bg-cover bg-center bg-binyam justify-center items-center py-10">
      <div className="absolute inset-0 bg-red-700 bg-opacity-90 z-0"></div>

    <div className="relative flex gap-3 flex-col items-center justify-center z-20 opacity-100">
        <img src="https://mekedoniahomes.org/wp-content/uploads/2021/10/fav.png" alt="image" />
        <h1 className='text-5xl'>
            &quot;ሰውን ለመርዳት ሰው መሆን በቂ ነው!&quot;
        </h1>
        <p className='text-base font-bold font-vidaloka'>
            A Sanctuary of the Poor, the Sick, the Weak and the Friendless.
        </p>
        <div className='flex gap-5 pt-3'>

            <a className='bg-white rounded' href = "https://www.facebook.com/mekedoniahomes">
                <svg height = "40" width = "40" className = "px-2 py-2"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12.0672C23 5.95496 18.0751 1 12 1C5.92486 1 1 5.95496 1 12.0672C1 17.5912 5.02254 22.1697 10.2812 23V15.2663H7.48828V12.0672H10.2812V9.62898C10.2812 6.85525 11.9235 5.32313 14.4361 5.32313C15.6396 5.32313 16.8984 5.53929 16.8984 5.53929V8.26287H15.5114C14.1449 8.26287 13.7188 9.11597 13.7188 9.99119V12.0672H16.7695L16.2818 15.2663H13.7188V23C18.9775 22.1697 23 17.5912 23 12.0672Z" fill="#e23c3c"></path> </g></svg>
            </a>
            <a href = "" className='bg-white rounded'>
                <svg height = "40" width = "40" className = "px-2 py-2" fill="#c33d17"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-271 311.2 256 179.8" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z"></path> </g></svg>
            </a>
            <a className='flex bg-white rounded items-center justify-center' href = "https://www.instagram.com/mekedoniacharity/">
                <svg height = "35" width = "35" className = "px-2 py-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ef481a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ef481a"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ef481a"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ef481a"></path> </g></svg>
            </a>
        </div>
        <div className='flex gap-8 pt-5 text-base font-sans font-medium'>
            <a>ABOUT US</a>
            <a>OUR CAUSES</a>
            <a>OUR IMPACT</a>
            <a>JOIN US</a>
            <a>DONATE</a>

        </div>

    </div>
        
    </div>
  )
}

export default Contact