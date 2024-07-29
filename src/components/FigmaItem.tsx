import React from "react";

interface FigmaItemProps {
  title: string;
  description: string;
}

const FigmaItem: React.FC<FigmaItemProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FigmaItem;
