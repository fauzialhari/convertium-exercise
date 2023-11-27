import fsPromises from "fs/promises";
import path from "path";
import FullPageSections from "./FullPageSections";
import { Data } from "..";

const dataFilePath = path.join(process.cwd(), "json/data.json");
async function getData(): Promise<Data> {
  const fileBuffer = await fsPromises.readFile(dataFilePath);
  const objectData = JSON.parse(fileBuffer.toString());
  return objectData;
}
export default async function Home() {
  const data = await getData();
  return <FullPageSections data={data} />;
}
