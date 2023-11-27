import fsPromises from "fs/promises";
import path from "path";
import SecondSlideCarousel from "./SecondSlideCarousel";

const dataFilePath = path.join(process.cwd(), "json/data.json");
const getData = async () => {
  const jsonData = await fsPromises.readFile(dataFilePath);
  const objectData = JSON.parse(jsonData.toString());
  return objectData;
};
export default async function Home() {
  const data = await getData();
  return (
    <>
      <section className="section">
        <div className="h-screen relative before:content-['*'] before:absolute before:w-full before:h-full before:bg-white before:opacity-25">
          <video data-autoplay loop muted className="h-full object-cover">
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
          <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center prose">
            <h1>This is Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              culpa veniam molestiae corrupti accusantium excepturi, voluptate
              quos. Similique eius, nihil deleniti qui quisquam doloribus
              aperiam iure perspiciatis animi. Ducimus, aliquam.
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
                  Title for the carousel
                </h1>
                <SecondSlideCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
