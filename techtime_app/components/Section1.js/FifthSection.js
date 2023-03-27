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
      image: "/Frame_165.png",
      review:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      name: "samuel fortune",
      title: "product designer",
    },
    {
      id: 2,
      image: "/Frame_165_(1).png",
      review:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      name: "John Doe2",
      title: "product designer",
    },
    {
      id: 3,
      image: "/Frame_165_3).png",
      review:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      name: "Jbella moon",
      title: "product designer",
    },
    {
      id: 3,
      image: "/Frame_165.png",
      review:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      name: "bryce jason",
      title: "product designer",
    },
    {
      id: 3,
      image: "/Frame165_(2).png",
      review:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      name: "bryce jason",
      title: "product designer",
    },
    {
      id: 3,
      image: "/Frame_165.png",
      review:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      name: "bryce jason",
      title: "product designer",
    },
    {
      id: 3,
      image: "/Frame_165.png",
      review:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      name: "bryce jason",
      title: "product designer",
    },
  ];
  return (
    <div className="flex flex-col relative  justify-center w-full items-center">
      <div className="flex w-full md:w-[600px] flex-col space-y-4 justify-center items-center">
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
                className=" w-[300px] md:w-[300px] max-w-[500px] bg-white flex flex-col   p-5 shadow-md shadow-scudGreen/10  rounded-md"
              >
                <p className=" whitespace-normal  text-[#787878] text-sm">
                  {item.review}
                </p>
                <div className="my-5 flex  space-x-3 i">
                  <img
                    className=" w-5 rounded-full object-cover  h-5  "
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-[#A1A1A1] text-xs">{item.title}</p>
                  </div>
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
