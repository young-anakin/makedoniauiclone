import { useState } from 'react';

const ImageGallery = () => {
  // State to track which button is selected
  const [selectedSet, setSelectedSet] = useState(1);

  // Images for each set
  const set1Images = [
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2021-11-28_20-49-57.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00460-scaled-e1677245676198-768x1015.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00478-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00474-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00372-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00379-768x512.jpg',
  ];

  const set2Images = [
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00372-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00379-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00376-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00377-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00378-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00375-768x512.jpg',
  ];

  const set3Images = [
    ...set1Images, // Combine both sets for the third one
    ...set2Images,
  ];

  return (
    <div>
      {/* Buttons to select image sets */}
      <div className="flex gap-4 mb-6 justify-center">
      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans text-base font-medium duration-300 rounded ${
          selectedSet === 3
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(3)}
      >
        ALL
      </button>
      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans font-medium text-base duration-300 rounded ${
          selectedSet === 1
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(1)}
      >
        OUR ELDERS
      </button>
      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans font-medium text-base duration-300 rounded ${
          selectedSet === 2
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(2)}
      >
        THE NEW BUILDING
      </button>
    </div>

      {/* Conditionally render images based on the selected set */}
      <div className="grid grid-cols-3 gap-2">
        {selectedSet === 1 &&
          set1Images.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className='overflow-hidden'>
                <img key={index} src={image} alt={`Set 1 Image ${index + 1}`} className="w-[500px] h-[300px] transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        {selectedSet === 2 &&
          set2Images.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className='overflow-hidden'>
                <img key={index} src={image} alt={`Set 2 Image ${index + 1}`} className="w-[500px] h-[300px] transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        {selectedSet === 3 &&
          set3Images.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className='overflow-hidden'>
                <img key={index} src={image} alt={`Set 3 Image ${index + 1}`} className="w-[500px] h-[300px] transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
