import React from "react";
import FigmaItem from "../components/FigmaItem";

const items = [
  { id: 1, title: "Item 1", description: "Description 1" },
  { id: 2, title: "Item 2", description: "Description 2" },
  { id: 3, title: "Item 3", description: "Description 3" },
  { id: 4, title: "Item 4", description: "Description 4" },
  { id: 5, title: "Item 5", description: "Description 5" },
  { id: 6, title: "Item 6", description: "Description 6" },
  { id: 7, title: "Item 7", description: "Description 7" },
  { id: 8, title: "Item 8", description: "Description 8" },
  { id: 9, title: "Item 9", description: "Description 9" },
  { id: 10, title: "Item 10", description: "Description 10" },
  { id: 11, title: "Item 11", description: "Description 11" },
  { id: 12, title: "Item 12", description: "Description 12" },
  { id: 13, title: "Item 13", description: "Description 13" },
  { id: 14, title: "Item 14", description: "Description 14" },
  { id: 15, title: "Item 15", description: "Description 15" },
  { id: 16, title: "Item 16", description: "Description 16" },
];

const DashBoardPage: React.FC = () => {
  return (
    <div className="p-4 h-full">
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <FigmaItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DashBoardPage;
