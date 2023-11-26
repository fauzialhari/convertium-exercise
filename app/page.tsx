import fsPromises from "fs/promises";
import path from "path";

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
      <div className="section">{JSON.stringify(data)}</div>
    </>
  );
}
