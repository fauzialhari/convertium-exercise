"use client";
import { useEffect, useState } from "react";
import FullPageSections from "./FullPageSections";
import { Data } from "..";
async function getData(): Promise<Data> {
  const response = await fetch(`http://localhost:3000/api/`);
  return response.json();
}

export default function Home() {
  const [data, setData] = useState<Data>({
    firstSlide: {
      bgUrl: "",
      text: "",
      title: "",
    },
    secondSlide: {
      bgUrl: {
        default: "",
        alt: ""
      },
      title: "",
      carouselData: []
    }
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3000/api/`);
      const data = await response.json();      
      setData(data);
    }
    getData();
  }, []);
  return <FullPageSections data={data} />;
}
