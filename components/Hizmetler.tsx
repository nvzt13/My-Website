import React from 'react'

const Hizmetler = () => {
  return (
    <section className="w-full mx-auto z-10 flex flex-col items-center text-center px-4 py-12 absolute bottom-[-50px] left-0 right-0">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between p-8 gap-8">
        {/* Sol taraf: Başlık */}
        <div className="text-left w-full md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            Size nasıl yardımcı <br className="hidden md:block" /> olabiliriz?
          </h2>
        </div>

        {/* Sağ taraf: Hizmetler */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full md:w-2/3">
          <div className="group cursor-pointer transition-transform hover:scale-105">
            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-800">
              Basit Website
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800">
              En iyi fiyat/performans
            </p>
          </div>

          <div className="group cursor-pointer transition-transform hover:scale-105">
            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-800">
              Kurumsal Website
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800">
              Büyük ihtiyaçlar için
            </p>
          </div>

          <div className="group cursor-pointer transition-transform hover:scale-105">
            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-800">
              E-ticaret sitesi
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800">
              Satış yapmak için
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hizmetler
