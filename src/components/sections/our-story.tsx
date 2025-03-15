"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StoryItem {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const STORY_ITEMS: StoryItem[] = [
  {
    title: "첫 만남",
    date: "2022년 가을",
    description: `모든 것은 Bumble에서 시작되었어요. 상호는 밴쿠버에, 스테프는 밴쿠버 아일랜드에 살고 있었죠. 비록 물리적으로 떨어져 있었지만, 메시지를 주고받는 순간부터 우리는 강한 연결을 느꼈어요. 몇 주 동안 이야기를 나누다 보니, 드디어 직접 만나야 할 때가 왔다는 걸 알았죠. 처음 만난 순간부터 우린 편안했고, 웃음이 끊이지 않았어요. 서로를 깊이 이해하는 사람과만 느낄 수 있는 특별한 교감 속에서, 즐거운 대화와 따뜻한 시간들을 함께하며 우리의 이야기가 시작되었답니다.`,
    imageUrl: "/images/our_story/01.webp",
  },
  {
    title: "첫 걸음",
    date: "2023년 봄",
    description: `거리가 우리를 갈라놓을 수는 없었어요. 우리는 가능한 한 자주 만나며 사랑을 키워갔죠. 시간이 지날수록, 더 이상 떨어져 있고 싶지 않다는 걸 확신하게 되었어요. 마침 스테프는 개인적인 이유로 밴쿠버로 이사할 계획이 있었고, 이제 막 싹트기 시작한 사랑을 가까이에서 키워가는 것도 멋진 일이라 느꼈어요. 그렇게 우리는 서로에게서 떼려야 뗄 수 없는 존재가 되었어요. 낮에는 함께 도시를 탐험하고, 밤에는 끝도 없이 이야기를 나누며 서로를 더 깊이 알아갔죠. 우리는 서로의 따뜻한 성격을 진심으로 사랑하게 되었어요. 언제나 미소를 나누고, 따뜻한 말 한마디를 건네고, 조용히 곁에서 위로가 되어줄 수 있는 사람이라는 걸 깨달았어요.`,
    imageUrl: "/images/our_story/02.jpg",
  },
  {
    title: "동거의 시작",
    date: "2023년 봄",
    description: `사귄 지 4개월 만에, 우리는 또 하나의 큰 결정을 내렸어요 – 함께 살기로 한 거예요. 그리고 이를 더욱 특별하게 만들기 위해, 우리만의 귀여운 가족을 맞이했죠. 바로 우리의 사랑스러운 쿠키 몬스터! 🍪🐱그날 이후로 쿠키는 우리 가족의 소중한 일원이 되었고, 우리의 아늑한 집은 사랑과 웃음, 그리고 수많은 포옹으로 가득 찬 공간이 되었어요. 서로에게 기대어 하루를 마무리하는 순간들이, 우리에게 가장 소중한 행복이 되었답니다.`,
    imageUrl: "/images/our_story/03.webp",
  },
  {
    title: "우리의 함께하는 삶",
    date: "2025년 봄",
    description: `함께 이 여정을 시작한 지도 벌써 2년이 넘었어요. 그동안의 모든 순간이 소중하고, 놀라울 만큼 특별했어요. 기쁨과 어려움을 함께 나누며, 우리는 언제나 서로의 가장 든든한 편이 되어 왔어요. 서로를 응원하고, 꿈을 향해 나아갈 수 있도록 힘이 되어 주었죠. 크고 작은 도전을 함께 헤쳐 나가며, 우리의 관계는 신뢰와 지지, 그리고 서로를 더 나은 사람으로 만들어 가겠다는 다짐 위에서 더욱 단단해졌어요. 우리는 함께 수많은 모험을 떠났고, 그 과정에서 아름다운 추억들을 하나둘 쌓아갔어요. 그리고 이제, 우리는 평생을 함께할 가장 소중한 여행 메이트가 되었어요.`,
    imageUrl: "/images/our_story/04.webp",
  },
  {
    title: "미래",
    date: "2025년 봄",
    description: `앞으로 펼쳐질 우리의 미래를 생각하면 설렘이 가득해요. 함께 가족을 이루고, 사랑과 따뜻함이 넘치는 집을 만들어 가며, 수많은 새로운 추억을 쌓을 날들이 벌써부터 기다려져요. 서로가 곁에 있기에, 우리 앞에는 끝없는 가능성이 펼쳐져 있고, 무엇보다도 가장 좋은 순간들은 이제 막 시작되려 한다는 걸 알아요. 우리는 서로를 통해 더 나은 사람이 되고, 함께 성장하며 평생을 함께할 가장 소중한 동반자가 되었어요. 이제 우리의 새로운 여정이 시작되고, 그 여정 속에서 더욱 아름다운 이야기들을 만들어 나갈 거예요.`,
    imageUrl: "/images/our_story/05.jpg",
  },
];

export function OurStory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    // 모바일 환경에서만 자동 슬라이드 적용
    const isMobile = window.innerWidth < 768;
    let interval: NodeJS.Timeout;

    if (isMobile) {
      interval = setInterval(() => {
        api.scrollNext();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
      api.off("select", () => {});
    };
  }, [api]);

  return (
    <section
      id="our-story"
      className="min-h-screen flex flex-col justify-between py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-main text-center mb-12 text-[#A26249]">
          우리의 이야기
        </h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
            setApi={setApi}
          >
            <CarouselContent>
              {STORY_ITEMS.map((item, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative aspect-square">
                          <div className="w-full h-full bg-gray-200 rounded-lg">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="text-2xl font-main mb-2 text-[#A26249]">
                            {item.title}
                          </h3>
                          <p className="text-[#A26249]/70 mb-4">{item.date}</p>
                          <p className="text-lg text-[#A26249]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-50 rounded-full"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-6 w-6 text-[#A26249]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-50 rounded-full"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-6 w-6 text-[#A26249]" />
              </Button>
            </div>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6">
            {STORY_ITEMS.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentSlide === index
                    ? "bg-[#A26249] w-4"
                    : "bg-[#A26249]/30"
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-3xl font-main font-bold text-[#A26249]">S & S</p>
        <p className="text-sm font-main text-[#A26249] mt-1">2025.05.05</p>
      </div>
    </section>
  );
}
