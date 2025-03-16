"use client";

import { Home } from "@/components/sections/home";
import { OurStory } from "@/components/sections/our-story";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { QnA } from "@/components/sections/qna";
import { Map } from "@/components/sections/map";

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
