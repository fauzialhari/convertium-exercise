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
      </section>
      <div className="section">{JSON.stringify(data)}</div>
    </>
  );
}
