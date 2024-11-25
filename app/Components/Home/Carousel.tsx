import React from "react";
import Slider from "react-slick";
import Stars from "./Stars";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 17 17"
            width={400}
            height={24}
            className="absolute top-0 right-0"
            fill="#f70202"
          >
            <g id="SVGRepo_iconCarrier">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(1.000000, 1.000000)" fill="#f70202">
                  <path
                    d="M1,13.969 C0.447,13.969 0,13.534 0,13 C0,12.466 0.447,12.031 1,12.031 C3.757,12.031 5,10.83 5,8.124 L5,6.978 L1.559,6.978 C0.729,6.978 0.053,6.3 0.053,5.467 L0.053,1.511 C0.053,0.677 0.729,-0.001 1.559,-0.001 L5.494,-0.001 C6.324,-0.001 7,0.677 7,1.511 L7,8.123 C7,11.898 4.859,13.969 1,13.969 L1,13.969 Z"
                  ></path>
                  <path
                    d="M10,13.969 C9.447,13.969 9,13.534 9,13 C9,12.466 9.447,12.031 10,12.031 C12.757,12.031 14,10.83 14,8.124 L14,6.947 L10.533,6.947 C9.699,6.947 9.021,6.271 9.021,5.441 L9.021,1.505 C9.021,0.675 9.699,-0.001 10.533,-0.001 L14.488,-0.001 C15.322,-0.001 16,0.675 16,1.505 L16,8.123 C16,11.898 13.859,13.969 10,13.969 L10,13.969 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
    <div
      className="bg-white rounded-lg shadow-lg"
      style={{ width: "1100px", margin: "auto", padding: "30px" }}
    >

      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative ">
          {/* Quotation Mark */}


          {/* Image */}
          <img
            src="https://mekedoniahomes.org/wp-content/uploads/2023/02/Dr.-Nigussie-Mitiku-e1677249924235.png"
            alt="Doctor Nigusse Mitiku"
            className="rounded-lg shadow-lg"
            height={80}
            width={80}
          />

          {/* Testimonial Text */}
          <p className="text-gray-500 text-sm font-sans pt-4 pb-6 leading-relaxed">
            Makedonia is an institution that gathers and helps those who have
            lost their loved ones, those who have been forgotten, those who have
            no side, and those who have fallen by the wayside. When I saw this, I
            really saw that there are people who do good and feel humane in our
            country. EBC will continue to support itself by making high-budget
            commercials, and documentaries for free.
          </p>

          {/* Author */}
          <h3
            className="text-base font-medium text-gray-800"
            style={{ paddingBottom: "0.5rem" }}
            >
            <span className="text-lg font-semibold text-black">
              DOCTOR NIGUSSE MITIKU,
            </span>{" "}
            Ethiopian Broadcasting Corporation CEO
          </h3>

          {/* Rating */}
          <Stars />
        </div>

        {/* Slide 2 */}
        <div className="relative px-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 17 17"
            width={24}
            height={24}
            className="absolute top-0 right-0"
            fill="#f70202"
          >
            <g id="SVGRepo_iconCarrier">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(1.000000, 1.000000)" fill="#f70202">
                  <path d="M1,13.969 C0.447,13.969 0,13.534 0,13 C0,12.466 0.447,12.031 1,12.031 C3.757,12.031 5,10.83 5,8.124 L5,6.978 L1.559,6.978 C0.729,6.978 0.053,6.3 0.053,5.467 L0.053,1.511 C0.053,0.677 0.729,-0.001 1.559,-0.001 L5.494,-0.001 C6.324,-0.001 7,0.677 7,1.511 L7,8.123 C7,11.898 4.859,13.969 1,13.969 L1,13.969 Z"></path>
                  <path d="M10,13.969 C9.447,13.969 9,13.534 9,13 C9,12.466 9.447,12.031 10,12.031 C12.757,12.031 14,10.83 14,8.124 L14,6.947 L10.533,6.947 C9.699,6.947 9.021,6.271 9.021,5.441 L9.021,1.505 C9.021,0.675 9.699,-0.001 10.533,-0.001 L14.488,-0.001 C15.322,-0.001 16,0.675 16,1.505 L16,8.123 C16,11.898 13.859,13.969 10,13.969 L10,13.969 Z"></path>
                </g>
              </g>
            </g>
          </svg>
          <img
            src="https://mekedoniahomes.org/wp-content/uploads/2023/02/Abiy_Ahmed_with_LI_Yong_2018_cropped.jpeg"
            alt="Doctor Abiy Ahmed"
            className="rounded-lg shadow-lg"
            height={80}
            width={80}
            />
          <p className="text-gray-500 text-sm font-sans pt-4 pb-6 leading-relaxed">
            I ask all of Ethiopia to cooperate in this righteous act because we
            can save each other by giving love rather than supporting each
            other. Also, for those who are not able to come outside of Addis
            Ababa or nearby, I humbly ask you to send OK to 8151 provided by
            Ethio Telecom.
          </p>
          <h3
            className="text-base font-medium text-gray-800"
            style={{ paddingBottom: "0.5rem" }}
            >
            <span className="text-lg font-semibold text-black">
              DOCTOR ABIY AHMED,
            </span>{" "}
            FDRE Prime Minister
          </h3>
          <Stars />
        </div>
      </Slider>
    </div>
</div>
  );
};

export default Carousel;
