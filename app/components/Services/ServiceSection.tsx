import { Sparkles, Code, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "AI Integration",
    description:
      "Beautiful, responsive websites that captivate your audience and drive results.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Web Design",
    description:
      "Beautiful, responsive websites that captivate your audience and drive results.",
    icon: <Code size={24} />,
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that users love.",
    icon: <Smartphone size={24} />,
  },
];

export default function ServicesSection() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}