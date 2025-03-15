"use client";

import { motion } from "framer-motion";
import { Home } from "@/components/sections/home";
import { OurStory } from "@/components/sections/our-story";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { QnA } from "@/components/sections/qna";
import { Map } from "@/components/sections/map";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerDelay = 0.2;

export default function Page() {
  return (
    <main className="min-h-screen">
      <Home />
      <OurStory />
      <PhotoGallery />
      <QnA />
      <Map />
    </main>
  );
}
