"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QnAItem {
  question: string;
  answer: string;
}

const QNA_ITEMS: QnAItem[] = [
  {
    question: "📍 결혼식은 언제, 어디서 시작하나요?",
    answer:
      "결혼식은 오후 3시에 시작되며, 장소는 Elgin Hall (14250 Crescent Rd, Surrey, BC V4P 1L4) 입니다.하객분들은 2시 30분부터 3시까지 도착하시면 됩니다.시간에 맞춰 시작해야 하므로 늦지 않도록 꼭 신경 써 주세요! 늦게 도착하셔도 입장은 가능하지만, 원활한 진행을 위해 가급적 제시간에 와 주시면 감사하겠습니다.",
  },
  {
    question: "👗 어떤 복장을 입고 가야 하나요?",
    answer:
      "편하게 즐길 수 있는 옷차림이면 좋겠어요! 드레스 코드는 세미 포멀(Semi-Formal) 입니다. 하지만 가장 중요한 건 여러분이 편하게 느낄 수 있는 옷을 입는 거예요! 실내에서 진행되며, 봄이니까 가볍고 산뜻한 옷차림이 좋을 것 같아요. 너무 격식 있는 옷이 부담스럽다면 살짝 캐주얼한 스타일도 괜찮아요. 무엇보다 함께해 주시는 것만으로도 감사하니까, 편안한 마음으로 오세요! 😊",
  },
  {
    question: "🚗 주차 공간이 충분한가요? 대중교통 이용이 가능한가요?",
    answer:
      "네! 주차 공간은 총 60대까지 가능합니다. 하지만 웨딩 장소가 South Surrey 지역이라 대중교통보다는 차량 이용이 편리해요. 카풀을 하시면 더욱 편하게 이동할 수 있을 거예요. 혹시 교통 관련해서 어려움이 있다면 미리 알려 주세요!",
  },
  {
    question: "🍽️ 어떤 음식이 제공되나요?",
    answer:
      "맛있는 음식들로 여러분을 맞이할 거예요! 식전 및 식중에는 가벼운 스낵이 준비되어 있습니다. 본식 후에는 뷔페 스타일 저녁식사가 제공되며, 다양한 취향과 식단을 고려한 메뉴를 준비할 예정이에요. 물론, 달콤한 디저트와 케이크도 빠질 수 없죠! 술은 제공되지 않지만, 논알콜 음료로 건배하며 함께 축하하는 시간을 가질 예정이에요!",
  },
  {
    question: "🚫 결혼식에서 주의해야 할 점이 있나요?",
    answer:
      "음주 및 흡연은 금지되어 있어요. 흡연이 필요하신 분들은 장소 밖으로 이동 후 돌아와 주세요.",
  },
  {
    question: "📸 사진 촬영이 가능한가요?",
    answer:
      "네! 식과 리셉션 동안 자유롭게 사진과 영상을 촬영하셔도 됩니다. 다만, 식이 시작되면 플래시와 소리는 꺼주세요. 결혼식 후 여러분이 찍은 사진과 영상을 공유해 주시면, 소중한 추억으로 남길 수 있을 것 같아요!",
  },
  {
    question: "⏰ 일정이 어떻게 되나요?",
    answer:
      "현재 세부 일정은 조율 중이며, 추후 공유드릴 예정입니다.결혼식 당일에도 일정 안내를 받을 수 있도록 준비할게요!",
  },
  {
    question: "🎶 음악과 춤을 즐길 수 있나요?",
    answer:
      "네! 결혼식 내내 음악을 틀어둘 예정이에요. 저희는 춤을 크게 좋아하는 편은 아니지만, 원하시는 분들은 자유롭게 춤을 즐겨 주세요! 🎵💃",
  },
];

export function QnA() {
  return (
    <section
      id="qna"
      className="min-h-screen flex flex-col justify-between py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-main text-center mb-12 text-[#A26249]">
          Q&A
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {QNA_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl md:text-2xl font-main font-bold text-[#A26249]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl text-[#A26249]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-3xl font-main font-bold text-[#A26249]">S & S</p>
        <p className="text-sm font-main text-[#A26249] mt-1">2025.05.05</p>
      </div>
    </section>
  );
}
