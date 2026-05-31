import { testimonials } from "../../data/testimonials";
import type { Testimonial } from "../../types";
import StarIcon from "../ui/starIcon";
import { useRef } from "react";

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    const el = scrollRef.current?.children[index] as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-3">
          What Partners Say About Working With Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Trusted voices. Real experiences. Proven results.
        </p>

        {/* Scroll horizontal */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide px-4"
        >
          {testimonials.map((t, idx: number) => (
            <div
              key={t.id}
              className={`
                snap-center shrink-0 w-[85vw] md:w-[420px]
                p-8 rounded-2xl border
                bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800
                relative
                transition-all duration-300
                ${idx === 1 ? "scale-105 border-orange-500 shadow-xl" : "scale-95 opacity-70"}
              `}
            >
              {/* Kutip orange */}
              <span className="absolute -top-4 left-6 text-7xl text-orange-500 font-serif">
                "
              </span>

              {/* Rating bintang pake StarIcon */}
              <div className="flex gap-1 justify-center mb-6 mt-6">
                {Array.from({ length: t.rating ?? 0 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 fill-yellow-400 dark:fill-yellow-300"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-center text-gray-700 dark:text-gray-300 mb-8 text-base leading-relaxed">
                "{t.quote}"
              </p>

              {/* Nama + Position */}
              <div className="text-center">
                <p className="font-bold text-gray-900 dark:text-white text-lg">
                  {t.name}
                </p>
                <p className="text-sm text-orange-500 mt-1">{t.position}</p>
              </div>

              {/* Avatar */}
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mx-auto -mb-16 mt-8 border-4 border-white dark:border-gray-950 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots 3 */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_: Testimonial, i: number) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === 1 ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
