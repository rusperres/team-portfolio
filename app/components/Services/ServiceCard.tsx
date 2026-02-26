import React from "react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-white border border-orange-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      {/* Icon Container */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default ServiceCard;