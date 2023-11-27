"use client";
import Slider from "react-slick";
import { CarouselData } from "..";
export default function Carousel({ data }: { data: CarouselData[] }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    ),
    prevArrow: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </span>
    ),
  };
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div className="pr-3" key={item.id}>
          <div className="pb-[100%] rounded-tl-3xl rounded-br-3xl relative bg-white/80">
            <div className="prose absolute top-0 left-0 right-0 bottom-0 w-full h-full p-6 overflow-y-auto">
              <div className="content text-lg">
                <h3 className="mt-0">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
