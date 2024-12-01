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

  const Residences = [
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2021-11-28_20-49-57-768x960.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00372-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00416-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00401-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00412-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00434-768x512.jpg',
  ];

  const ArtRoom = [
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00448-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-23-07-768x576.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-23-02-768x576.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-22-57.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-22-38-768x576.jpg',
  ];

  const workshops = [
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00470-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00468-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00472-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00483-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00465-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00463-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00452-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00456-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00457-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00458-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00459-768x512.jpg',
    'https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00462-768x512.jpg',


  ];

  const set3Images = [
    ...set1Images, // Combine both sets for the third one
    ...set2Images,
    ...Residences,
    ...ArtRoom,
    ...workshops
  ];

  return (
    <div className='text-nowrap'>
      {/* Buttons to select image sets */}
      <div className="flex gap-4 mb-6 justify-center ">
      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans text-xs font-medium duration-300 rounded ${
          selectedSet === 3
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(3)}
      >
        ALL
      </button>
      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans font-medium text-xs duration-300 rounded ${
          selectedSet === 1
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(1)}
      >
        OUR ELDERS
      </button>
      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans font-medium text-xs duration-300 rounded ${
          selectedSet === 2
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(2)}
      >
        THE NEW BUILDING
      </button>

      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans font-medium text-xs duration-300 rounded ${
          selectedSet === 4
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(4)}
      >
        WORKSHOPS
      </button>

      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans font-medium text-xs duration-300 rounded ${
          selectedSet === 5
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(5)}
      >
        RESIDENCES
      </button>

      <button
        className={`py-4 px-10 tracking-[2px] border-gray-500 border font-sans font-medium text-xs duration-300 rounded ${
          selectedSet === 6
            ? 'bg-[#ed3604] text-white border-[#ed3604]'
            : 'text-gray-500 hover:bg-[#ed3604] hover:text-white hover:border-[#ed3604]'
        }`}
        onClick={() => setSelectedSet(6)}
      >
        ART ROOM
      </button>
    </div>

      {/* Conditionally render images based on the selected set */}
      <div className="grid grid-cols-3 gap-2 ">
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
        {selectedSet === 4 &&
          workshops.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className='overflow-hidden'>
                <img key={index} src={image} alt={`Set 3 Image ${index + 1}`} className="w-[500px] h-[300px] transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        {selectedSet === 5 &&
          Residences.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className='overflow-hidden'>
                <img key={index} src={image} alt={`Set 3 Image ${index + 1}`} className="w-[500px] h-[300px] transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        {selectedSet === 6 &&
          ArtRoom.map((image, index) => (
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
