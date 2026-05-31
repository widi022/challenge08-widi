// import React from "react";
import Button from "../ui/Button";

const logos = [{ src: "/src/assets/Container.svg", alt: "Upwork" }];

export default function HeroSection() {
  return (
    <section className="relative bg-white dark:bg-[#0B0B0B] transition-colors w-screen overflow-y-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-transparent to-transparent dark:block hidden" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* konten kiri*/}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Your Tech Partner for <br />
              <span className="text-orange-500">Smarter Growth</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-xl mx-auto lg:mx-0">
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>
            <Button className="mt-8 sm:w-full" variant="primary" size="lg">
              Let's Talk
            </Button>
          </div>

          {/* gambar */}
          <div className="relative">
            <img
              src="/src/assets/phone-black.svg"
              alt="3D Phone"
              className="w-full max-w-lg mx-auto hidden dark:block"
            />
            <img
              src="/src/assets/phone-light.svg"
              alt="3D Phone"
              className="w-full max-w-lg mx-auto block dark:hidden"
            />
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
            Trusted by Global Innovators & Leading Brands
          </p>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white dark:from-[#0B0B0B] to-transparent z-10" />
          {/* logo yg berjejer */}
            <div className="flex animate-marquee whitespace-nowrap gap-5 md:gap-10">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 lg:h-14 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}