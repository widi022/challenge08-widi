import { useState } from "react";
import { processes } from "../../data/company";

export default function ProcessSection() {
  const [open, setOpen] = useState<number | null>(0); 

  return (
    <section className="py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Our Process
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <div className="relative">
          {/* Garis vertikal desktop di tengah */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-700 hidden md:block" />

          <div className="space-y-10 md:space-y-12">
            {processes.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-start"
                >
                  {/* Garis vertikal mobile di kiri */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-700 md:hidden" />

                  {/* Card - kiri/kanan di desktop, full di mobile */}
                  <div
                    className={`
                    ${isLeft ? "md:col-start-1 md:text-right" : "md:col-start-2"} 
                    pl-14 md:pl-0
                  `}
                  >
                    <div
                      onClick={() => setOpen(open === idx ? null : idx)}
                      className="bg-[#111] border border-gray-800 rounded-xl p-5 md:p-6 cursor-pointer hover:border-orange-500 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-semibold text-base md:text-lg">
                          {item.title}
                        </h3>
                        <span
                          className={`text-gray-400 text-xl transition-transform duration-300 ${open === idx ? "rotate-180" : ""}`}
                        >
                          ⌄
                        </span>
                      </div>

                      {/* Accordion content */}
                      <div
                        className={`grid transition-all duration-300 ${open === idx ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Titik orange - mobile kiri, desktop tengah */}
                  <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-6 w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm z-10 shadow-lg shadow-orange-500/30">
                    {item.step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}