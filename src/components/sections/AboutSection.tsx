import { useState } from "react";
import FintechImg from '../../assets/industries/Industry-Image.svg?react'
import EcomImg from '../../assets/industries/image-220.svg?react'
import HealthImg from '../../assets/industries/image-221.svg?react' 

type IndustryTab = "Fintech" | "E-Commerce" | "Healthcare";

const industries = [
  {
    id: "Fintech" as IndustryTab,
    title: "Fintech",
    desc: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    img: FintechImg,
  },
  {
    id: "E-Commerce" as IndustryTab,
    title: "E-Commerce",
    desc: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    img: EcomImg,
  },
  {
    id: "Healthcare" as IndustryTab,
    title: "Healthcare",
    desc: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    img: HealthImg,
  },
];

export default function AboutSection() {
  const [active, setActive] = useState<IndustryTab>("Fintech");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-3">Built for Your Industry</h2>
        <p className="text-gray-400 mb-12">
          We've helped companies across industries launch smarter, faster, and
          more securely.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            {industries.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`block text-left w-full transition-all ${
                  active === item.id
                    ? "text-white border-l-2 border-orange-500 pl-3"
                    : "text-gray-500 hover:text-gray-300 border-l-2 border-gray-700 pl-3"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-300 mb-6 max-w-xl">{current.desc}</p>

            {typeof current.img === "string" ? ( <img
              src={current.img}
              alt={current.title}
              className="w-full h-64 object-cover rounded-xl"
            /> ) : ( <current.img className="w-full h-64 object-cover rounded-xl" /> )}
          </div>
        </div>
      </div>
    </section>
  );
}
