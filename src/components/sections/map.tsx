"use client";

export function Map() {
  return (
    <section id="map" className="min-h-screen py-20 flex items-center relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-main text-center mb-12 text-[#A26249]">
          오시는 길
        </h2>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.7440626669396!2d-122.87789492326188!3d49.035195471989604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c3f7e9df61a7%3A0x301c8ebdf9a76f9f!2s14250%20Crescent%20Rd%2C%20Surrey%2C%20BC%20V4P%201L4!5e0!3m2!1sen!2sca!4v1711499433410!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
        <div className="mt-8 space-y-4 text-center">
          <p className="text-lg text-[#A26249]">
            <strong>주소:</strong> 14250 Crescent Rd, Surrey, BC V4P 1L4
          </p>
          <p className="text-[#A26249]">
            <strong>주차:</strong> 건물 내 지하주차장 이용 가능
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-3xl font-main font-bold text-[#A26249]">S & S</p>
        <p className="text-sm font-main text-[#A26249] mt-1">2025.05.05</p>
      </div>
    </section>
  );
}
