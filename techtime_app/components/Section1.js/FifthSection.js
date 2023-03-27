import React, { useEffect, useState } from "react";
import Carousel from "../common/Carousel";
import Heading from "../common/Heading";

function FifthSection() {
  const [windowSize, setWindowSize] = useState(null);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [windowSize]);

  const slides = [
    {
      id: 1,
      image: "/Rectangle 26.png",
      review:
        "Scud gave me one of the, most interesting platform to run with. I booked my ride and the driver arrived on time and he gave me good customer experience that i really love. Good one Scud",
      name: "John Doe1",
      ratingValue: "4.5",
    },
    {
      id: 2,
      image: "/Rectangle 26.png",
      review:
        "Scud gave me one of the, most interesting platform to run with. I booked my ride and the driver arrived on time and he gave me good customer experience that i really love. Good one Scud",
      name: "John Doe2",
      ratingValue: "2.5",
    },
    {
      id: 3,
      image: "/Rectangle 26.png",
      review:
        "Scud gave me one of the, most interesting platform to run with. I booked my ride and the driver arrived on time and he gave me good customer experience that i really love. Good one Scud",
      name: "John Doe3",
      ratingValue: "0.5",
    },
    {
      id: 3,
      image: "/Rectangle 26.png",
      review:
        "Scud gave me one of the, most interesting platform to run with. I booked my ride and the driver arrived on time and he gave me good customer experience that i really love. Good one Scud",
      name: "John Doe3",
      ratingValue: "0.5",
    },
    {
      id: 3,
      image: "/Rectangle 26.png",
      review:
        "Scud gave me one of the, most interesting platform to run with. I booked my ride and the driver arrived on time and he gave me good customer experience that i really love. Good one Scud",
      name: "John Doe3",
      ratingValue: "0.5",
    },
    {
      id: 3,
      image: "/Rectangle 26.png",
      review:
        "Scud gave me one of the, most interesting platform to run with. I booked my ride and the driver arrived on time and he gave me good customer experience that i really love. Good one Scud",
      name: "John Doe3",
      ratingValue: "0.5",
    },
    {
      id: 3,
      image: "/Rectangle 26.png",
      review:
        "Scud gave me one of the, most interesting platform to run with. I booked my ride and the driver arrived on time and he gave me good customer experience that i really love. Good one Scud",
      name: "John Doe3",
      ratingValue: "0.5",
    },
  ];
  return (
    <div className="flex flex-col relative  justify-center w-full items-center">
      <div className="flex w-[600px] flex-col space-y-4 justify-center items-center">
        <Heading text={"What Our Clients Are Saying"} />
        <p className="text-sm text-[#A1A1A1] text-center">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <div>
        {" "}
        <div className="my-10 flex flex-col items-center justify-center w-full">
          <Carousel
            device={windowSize <= 400 ? "sm" : windowSize <= 850 ? "md" : "lg"}
          >
            {slides?.map((item, index) => (
              <div
                key={index}
                className=" w-[260px] max-w-[260px] bg-white flex flex-col justify-center items-center  p-5 shadow-md shadow-scudGreen/10  rounded-md"
              >
                <p className=" whitespace-normal text-center text-textColor text-sm">
                  {item.review}
                </p>
                <div className="my-5 flex flex-col space-y-5 items-center justify-center">
                  {/* <img
                    className=" w-10 rounded-full object-cover  h-10   "
                    src={item.image}
                    alt={item.name}
                  /> */}
                  <p className="font-bold">{item.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
