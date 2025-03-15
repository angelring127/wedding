"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { scrollToSection, cn } from "@/lib/utils";
import { calculateDday, formatDday } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { Loading } from "@/components/ui/loading";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "홈", href: "home" },
  { label: "우리 이야기", href: "our-story" },
  { label: "갤러리", href: "gallery" },
  { label: "Q&A", href: "qna" },
  { label: "오시는길", href: "map" },
];

// 결혼식 날짜 설정
const WEDDING_DATE = new Date("2024-12-31T14:00:00+09:00");

const fadeIn = {
  initial: {
    opacity: 0,
    filter: "blur(8px)",
    y: 30,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
  transition: {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  },
};

const staggerDelay = 0.4;

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isProgressComplete, setIsProgressComplete] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const dday = calculateDday(WEDDING_DATE);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "our-story", "gallery", "qna", "map"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const { top, bottom } = element.getBoundingClientRect();
        return top <= 100 && bottom > 100;
      });

      if (currentSection) {
        setCurrentSection(currentSection);
      }

      const ourStorySection = document.getElementById("our-story");
      if (ourStorySection) {
        const { top } = ourStorySection.getBoundingClientRect();
        setIsScrolled(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imagesLoaded && !isProgressComplete) {
        setIsLoading(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [imagesLoaded, isProgressComplete]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const handleLoadingComplete = () => {
    setIsProgressComplete(true);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 모바일 상단 고정 메뉴 */}
      <nav
        className={cn(
          "md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "opacity-100 translate-y-0 bg-white/80 backdrop-blur-sm shadow-sm"
            : "opacity-0 -translate-y-full"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <p className="text-xl font-main font-bold text-[#A26249]">S & S</p>
          <h1 className="text-lg font-main text-[#A26249] absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.find((item) => item.href === currentSection)?.label}
          </h1>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Menu className="h-6 w-6 text-[#A26249]" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full h-full border-none bg-white backdrop-blur-none"
            >
              <motion.nav
                className="flex flex-col items-center justify-center h-full bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={`#${item.href}`}
                    className="text-3xl hover:text-[#A26249]/80 text-[#A26249] font-main py-4"
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* 데스크톱 상단 고정 메뉴 */}
      <nav
        className={cn(
          "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-sm"
            : "bg-transparent opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto flex items-center justify-between py-6">
          <p className="text-2xl font-main font-bold text-[#A26249]">S & S</p>
          <NavigationMenu>
            <ul className="flex gap-8 justify-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={`#${item.href}`}
                    className="text-2xl md:text-3xl hover:text-[#A26249]/80 text-[#A26249] transition-colors font-main"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </NavigationMenu>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <div id="hero" className="flex-1 flex flex-col relative">
        {/* 배경 이미지 */}
        <div className="relative w-full bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/images/main/main-rs_2560.webp"
              alt="Wedding Main"
              width={2560}
              height={1440}
              priority
              className="hidden md:block w-full h-auto"
              sizes="100vw"
              onLoad={handleImageLoad}
            />
            <Image
              src="/images/main/main_rs_960.webp"
              alt="Wedding Main"
              width={960}
              height={540}
              priority
              className="block md:hidden w-full h-auto"
              sizes="100vw"
              onLoad={handleImageLoad}
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-main font-bold mb-8 text-[#A26249]"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            Sangho & Steph
          </motion.h1>
          <div className="space-y-6 mb-16">
            <motion.p
              className="text-2xl md:text-3xl font-main font-bold text-[#A26249]"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{
                delay: staggerDelay,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              2025년 05월 05일 월요일 오후 3시
            </motion.p>
            <motion.p
              className="text-3xl md:text-4xl font-bold text-[#A26249] font-main px-6 py-2"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{
                delay: staggerDelay * 2,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {formatDday(dday)}
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl font-bold font-main text-[#A26249]/90 mt-8"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{
                delay: staggerDelay * 2.5,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              두 사람이 하나가 되는 순간,
              <br />
              소중한 분들과 함께하고 싶습니다.
            </motion.p>
          </div>

          {/* 히어로 섹션 내 네비게이션 */}
          <motion.nav
            className={cn(
              "transition-all duration-300",
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{
              delay: staggerDelay * 3,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <NavigationMenu>
              <ul className="flex flex-wrap gap-4 md:gap-8 justify-center">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={`#${item.href}`}
                      className="text-xl md:text-2xl hover:text-[#A26249] transition-colors font-main text-[#A26249]"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </NavigationMenu>
          </motion.nav>

          {/* 스크롤 화살표 */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{
              delay: staggerDelay * 4,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-3xl font-main font-bold text-[#A26249]">S & S</p>
            <p className="text-sm font-main text-[#A26249] mt-1">2025.05.05</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
