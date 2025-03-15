"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Photo {
  id: number;
  url: string;
  alt: string;
}

const PHOTOS: Photo[] = [
  { id: 1, url: "/images/gallery/01.webp", alt: "사진 1" },
  { id: 2, url: "/images/gallery/02.webp", alt: "사진 2" },
  { id: 3, url: "/images/gallery/03.webp", alt: "사진 3" },
  { id: 4, url: "/images/gallery/04.webp", alt: "사진 4" },
  { id: 5, url: "/images/gallery/05.webp", alt: "사진 5" },
  { id: 6, url: "/images/gallery/06.webp", alt: "사진 6" },
  { id: 7, url: "/images/gallery/07.webp", alt: "사진 7" },
  { id: 8, url: "/images/gallery/08.webp", alt: "사진 8" },
  { id: 9, url: "/images/gallery/09.webp", alt: "사진 9" },
  { id: 10, url: "/images/gallery/10.webp", alt: "사진 10" },
  { id: 11, url: "/images/gallery/11.webp", alt: "사진 11" },
  { id: 12, url: "/images/gallery/12.webp", alt: "사진 12" },
  { id: 13, url: "/images/gallery/13.webp", alt: "사진 13" },
  { id: 14, url: "/images/gallery/14.webp", alt: "사진 14" },
  { id: 15, url: "/images/gallery/15.webp", alt: "사진 15" },
  { id: 16, url: "/images/gallery/16.webp", alt: "사진 16" },
  { id: 17, url: "/images/gallery/17.webp", alt: "사진 17" },
  { id: 18, url: "/images/gallery/18.webp", alt: "사진 18" },
  { id: 19, url: "/images/gallery/19.webp", alt: "사진 19" },
  { id: 20, url: "/images/gallery/20.webp", alt: "사진 20" },
  { id: 21, url: "/images/gallery/21.webp", alt: "사진 21" },
  { id: 22, url: "/images/gallery/22.webp", alt: "사진 22" },
  { id: 23, url: "/images/gallery/23.webp", alt: "사진 23" },
  { id: 24, url: "/images/gallery/24.webp", alt: "사진 24" },
  { id: 25, url: "/images/gallery/25.webp", alt: "사진 25" },
  { id: 26, url: "/images/gallery/26.webp", alt: "사진 26" },
  { id: 27, url: "/images/gallery/27.webp", alt: "사진 27" },
  { id: 28, url: "/images/gallery/28.webp", alt: "사진 28" },
  { id: 29, url: "/images/gallery/29.webp", alt: "사진 29" },
  { id: 30, url: "/images/gallery/30.webp", alt: "사진 30" },
  { id: 31, url: "/images/gallery/31.webp", alt: "사진 31" },
  { id: 32, url: "/images/gallery/32.webp", alt: "사진 32" },
  { id: 33, url: "/images/gallery/33.webp", alt: "사진 33" },
  { id: 34, url: "/images/gallery/34.webp", alt: "사진 34" },
  { id: 35, url: "/images/gallery/35.webp", alt: "사진 35" },
  { id: 35, url: "/images/gallery/36.webp", alt: "사진 36" },
];

export function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col justify-between py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-main text-center mb-12">
          갤러리
        </h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {PHOTOS.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-4">
            {PHOTOS.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentSlide === index ? "bg-primary" : "bg-gray-300"
                )}
                onClick={() => {
                  api?.scrollTo(index);
                  setCurrentSlide(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-3xl font-main font-bold text-gray-400">S & S</p>
        <p className="text-sm font-main text-gray-400 mt-1">2025.05.05</p>
      </div>
    </section>
  );
}
