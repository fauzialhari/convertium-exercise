import { Key } from "react";

interface Content {
    title: string;
    text: string;
}

interface CarouselData extends Content {
    id: Key;
}

interface FirstSlide extends Content {
    bgUrl: string;
}

interface SecondSlide {
    title: string;
    bgUrl: string;
    carouselData: CarouselData[]
}

interface Data {
    firstSlide: FirstSlide;
    secondSlide: SecondSlide;
}