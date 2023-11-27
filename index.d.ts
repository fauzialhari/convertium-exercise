import { Key } from "react";

interface Content {
    title: string;
    text: string;
}

interface CarouselData extends Content {
    id: Key;
}

interface FirstSlide extends Content {
    bgUrl?: string;
}

interface bgUrl {
    default: string;
    alt?: string;
    srcSet?: {
        media: string;
        url: string
    }[]
}

interface SecondSlide {
    title: string;
    bgUrl: bgUrl;
    carouselData: CarouselData[]
}

interface Data {
    firstSlide: FirstSlide;
    secondSlide: SecondSlide;
}