import fsPromises from "fs/promises";
import path from "path";
import SecondSlideCarousel from "./SecondSlideCarousel";
import { Data } from "..";

const dataFilePath = path.join(process.cwd(), "json/data.json");
async function getData():  Promise<Data> {
  const fileBuffer = await fsPromises.readFile(dataFilePath);
  const objectData = JSON.parse(fileBuffer.toString());
  return objectData;
};
export default async function Home() {
  const data = await getData();
  return (
    <>
      <section className="section">
        <div className="h-screen relative before:content-['*'] before:absolute before:w-full before:h-full before:bg-slate-400 before:opacity-25">
          <video data-autoplay loop muted className="h-full object-cover">
            <source
              src={data.firstSlide.bgUrl}
              type="video/mp4"
            />
          </video>
          <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center prose text-white max-w-[75%]">
            <h1
              className="text-9xl text-white mb-0"
              style={{ textShadow: "0 0.3rem 0.9rem rgba(0,0,0,.4)" }}
            >
              {
                data.firstSlide.title
              }
            </h1>
            <p
              className="text-2xl"
              style={{ textShadow: "-1px 1px 8px rgba(0,0,0,.8)" }}
            >
              {
                data.firstSlide.text
              }
            </p>
          </article>
        </div>
      </section>
      <div className="section">
        <div className="h-screen w-screen relative">
          <picture className="max-h-full">
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
            <img src="assets/img-800x368.jpg" alt="Flowers" />
          </picture>
          <div className=" w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 right-0">
            <div className="container mx-auto">
              <div className="lg:w-3/5 ml-auto prose max-w-none mr-14">
                <h1 className="text-right text-white text-5xl">
                  {
                    data.secondSlide.title
                  }
                </h1>
                <SecondSlideCarousel
                  data={data.secondSlide.carouselData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
