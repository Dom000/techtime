import React from "react";
import FaqComponent from "../common/FaqComponent";
import Heading from "../common/Heading";

function Faq({ data }) {
  const faq = [
    {
      id: 1,
      question: "Is there a free trial available?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 2,
      question: "Can i change my plan later?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 3,
      question: "Are the courses lifetime?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 4,
      question: "Do i get certified after taking courses?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 5,
      question: "How do i reach out to mentors?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 6,
      question: "Do we get job ready after taking courses?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
  ];
  return (
    <div className="md:px-24">
      <div className=" flex flex-col justify-center items-center py-8">
        <div className="flex w-full md:w-[600px] flex-col space-y-4 justify-center items-center">
          <Heading text={"Frequently asked questions"} />
          <p className="text-sm text-[#A1A1A1] text-center">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>

        
      </div>
     {faq.length === 0 ? (
          <EmptyTable
            Icon={BsQuestionSquare}
            title={"No FAQ Available"}
            name={"FAQ"}
          />
        ) : (
          <div className=" px-4 md:px-14 mt-7 mb-16">
            {faq?.map((item, index) => (
              <FaqComponent key={index} item={item} />
            ))}
          </div>
        )}
    </div>
  );
}

export default Faq;
