"use client";
import { Data } from "..";
import { useFullPageContext } from "./FullPageContext";
import SecondSlideCarousel from "./SecondSlideCarousel";

export default function FullPageSections({ data }: { data: Data }) {
  const currentSlide = useFullPageContext();
  return (
    <>
      <section className="section">
        <div
          className={`h-screen relative before:content-['*'] before:absolute before:w-full before:h-full before:bg-slate-400 before:opacity-25 animate__animated ${
            currentSlide === 0 ? "animate__fadeIn" : "animate__fadeOut"
          }`}
        >
          <video data-autoplay loop muted className="h-full w-full object-cover">
            <source src={data.firstSlide.bgUrl} type="video/mp4" />
          </video>
          <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center prose text-white lg:max-w-[75%] max-w-none">
            <h1
              className={`xl:text-9xl md:text-7xl text-4xl text-white mb-0 ${
                currentSlide !== -1
                  ? "animate__animated animate__fadeInUp"
                  : "invisible"
              }`}
              style={{ textShadow: "0 0.3rem 0.9rem rgba(0,0,0,.4)" }}
            >
              {data.firstSlide.title}
            </h1>
            <p
              className={`lg:text-2xl text-1xl ${
                currentSlide !== -1
                  ? "animate__animated animate__fadeInUp"
                  : "invisible"
              }`}
              style={{
                textShadow: "-1px 1px 8px rgba(0,0,0,.8)",
                animationDelay: "0.75s",
              }}
            >
              {data.firstSlide.text}
            </p>
          </article>
        </div>
      </section>
      <div className="section">
        <div className={`h-screen w-screen relative overflow-hidden animate__animated ${currentSlide===1 ? "animate__fadeIn" : "animate__fadeOut"}`}>
          <picture className={`max-h-full block h-full w-full transition-transform duration-[3500ms] ${currentSlide===1 ? "scale-125" : "scale-50"}`}>
            <source
              media="(min-width:1280px)"
              srcSet="assets/img-1920x1200.jpg"
            />
            <source
              media="(orientation:portrait)"
              srcSet="assets/img-800x368.jpg"
            />
            <source
              media="(min-width:768px)"
              srcSet="assets/img-1280x800.jpg"
            />
            <img src="assets/img-800x368.jpg" alt="Earth" className="h-full w-full object-contain"/>
          </picture>
          <div className=" w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 right-0">
            <div className="container mx-auto">
              <div className="lg:w-3/5 w-4/5 ml-auto prose lg:max-w-none lg:mr-14 mr-auto">
                <h1 className="text-right text-white text-5xl landscape:text-3xl lg:text-5xl">
                  {data.secondSlide.title}
                </h1>
                <SecondSlideCarousel data={data.secondSlide.carouselData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
