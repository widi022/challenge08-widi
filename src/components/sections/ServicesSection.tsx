import Card from "../ui/card";
import Icon, { type IconName } from "../ui/icon";

const services: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "webdev",
    title: "Web Development",
    desc: "Build fast, scalable, and SEO-friendly websites.",
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    desc: "Native & cross-platform apps tailored to user needs.",
  },
  {
    icon: "uiux",
    title: "UI/UX Design",
    desc: "Delight users with intuitive and beautiful interfaces",
  },
  {
    icon: "cloud",
    title: "Cloud Solutions",
    desc: "Secure and flexible cloud infrastructure for your growth.",
  },
  {
    icon: "software",
    title: "Software Development",
    desc: "Custom solutions built around your business logic.",
  },
  {
    icon: "itinfrastructure",
    title: "IT Infrastructure",
    desc: "Scale your backend with reliable tech foundations.",
  },
  {
    icon: "cybersecurity",
    title: "Cybersecurity",
    desc: "Stay protected with enterprise-grade security.",
  },
  {
    icon: "qa",
    title: "QA & Testing",
    desc: "Ensure performance with rigorous testing frameworks.",
  },
  {
    icon: "consulting",
    title: "IT Consulting & Support",
    desc: "Make smarter tech decisions with expert guidance.",
  },
];

export default function ServicesSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((item) => (
        <Card
          key={item.icon}
          icon={<Icon name={item.icon} size={40} />}
          title={item.title}
          description={item.desc}
          hover={true}
          className="bg-[#0a0a0a] border-gray-800"
        />
      ))}
    </div>
  );
}
