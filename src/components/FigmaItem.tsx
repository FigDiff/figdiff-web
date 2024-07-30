import React from "react";
import { useNavigate } from "react-router-dom";

import DeleteButton from "./DeleteButton";

interface FigmaItemProps {
  userId: string;
  pageName: string;
  tabCount: number;
  onDelete: (pageName: string) => void;
}

const FigmaItem: React.FC<FigmaItemProps> = ({
  userId,
  pageName,
  tabCount,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/dash/${userId}/history/${pageName}`);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(pageName);
  };

  return (
    <div
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 relative"
      onClick={handleItemClick}
    >
      <DeleteButton
        pageName={pageName}
        className="absolute top-0 right-0 m-0.5 p-0.5"
      />
      <h2 className="font-bold text-xl mb-2">{pageName}</h2>
      <p>저장된 리소스: {tabCount}개</p>
      <button
        onClick={handleDeleteClick}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
      >
        X
      </button>
    </div>
  );
};

export default FigmaItem;
