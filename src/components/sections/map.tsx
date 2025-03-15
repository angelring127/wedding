"use client";

export function Map() {
  return (
    <section
      id="map"
      className="min-h-screen py-20 bg-gray-50 flex items-center relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-main text-center mb-12">
          오시는 길
        </h2>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          {/* 여기에 Google Maps가 들어갈 예정 */}
          <p className="h-full flex items-center justify-center">
            지도가 들어갈 자리입니다
          </p>
        </div>
        <div className="mt-8 space-y-4 text-center">
          <p className="text-lg">
            <strong>주소:</strong> 서울특별시 강남구 테헤란로 123 웨딩홀
          </p>
          <p className="text-gray-600">
            <strong>지하철:</strong> 2호선 강남역 4번 출구에서 도보 5분
          </p>
          <p className="text-gray-600">
            <strong>주차:</strong> 건물 내 지하주차장 이용 가능
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-3xl font-main font-bold text-gray-400">S & S</p>
        <p className="text-sm font-main text-gray-400 mt-1">2025.05.05</p>
      </div>
    </section>
  );
}
