"use client";
import Slider from "react-slick";
export default function Carousel() {
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
      <div className="pr-3">
        <div className="pb-[100%] rounded-tl-3xl rounded-br-3xl relative bg-white/80">
          <div className="prose absolute top-0 left-0 right-0 bottom-0 w-full h-full p-6 overflow-y-auto">
            <div className="content text-lg">
              <h3 className="mt-0">Lorem Ipsum #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                suscipit, pariatur ullam cumque eum quam iusto dolorem
                doloremque similique! Eum sint reprehenderit illo. Asperiores,
                pariatur cumque? Vero quidem eveniet assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-3">
        <div className="pb-[100%] rounded-tl-3xl rounded-br-3xl relative bg-white/80">
          <div className="prose absolute top-0 left-0 right-0 bottom-0 w-full h-full p-6 overflow-y-auto">
            <div className="content text-lg">
              <h3 className="mt-0">Lorem Ipsum #2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                suscipit, pariatur ullam cumque eum quam iusto dolorem
                doloremque similique! Eum sint reprehenderit illo. Asperiores,
                pariatur cumque? Vero quidem eveniet assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-3">
        <div className="pb-[100%] rounded-tl-3xl rounded-br-3xl relative bg-white/80">
          <div className="prose absolute top-0 left-0 right-0 bottom-0 w-full h-full p-6 overflow-y-auto">
            <div className="content text-lg">
              <h3 className="mt-0">Lorem Ipsum #3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                suscipit, pariatur ullam cumque eum quam iusto dolorem
                doloremque similique! Eum sint reprehenderit illo. Asperiores,
                pariatur cumque? Vero quidem eveniet assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-3">
        <div className="pb-[100%] rounded-tl-3xl rounded-br-3xl relative bg-white/80">
          <div className="prose absolute top-0 left-0 right-0 bottom-0 w-full h-full p-6 overflow-y-auto">
            <div className="content text-lg">
              <h3 className="mt-0">Lorem Ipsum #4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                suscipit, pariatur ullam cumque eum quam iusto dolorem
                doloremque similique! Eum sint reprehenderit illo. Asperiores,
                pariatur cumque? Vero quidem eveniet assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-3">
        <div className="pb-[100%] rounded-tl-3xl rounded-br-3xl relative bg-white/80">
          <div className="prose absolute top-0 left-0 right-0 bottom-0 w-full h-full p-6 overflow-y-auto">
            <div className="content text-lg">
              <h3 className="mt-0">Lorem Ipsum #5</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                suscipit, pariatur ullam cumque eum quam iusto dolorem
                doloremque similique! Eum sint reprehenderit illo. Asperiores,
                pariatur cumque? Vero quidem eveniet assumenda..
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
