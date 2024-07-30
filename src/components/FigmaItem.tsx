import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import { IoIosClose } from "react-icons/io";

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
  const [showModal, setShowModal] = useState(false);

  const handleItemClick = () => {
    navigate(`/dash/${userId}/history/${pageName}`);
  };

  const handleDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleConfirmDelete = () => {
    onDelete(pageName);
    setShowModal(false);
  };

  return (
    <div
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 relative"
      onClick={handleItemClick}
    >
      <h2 className="font-bold text-xl mb-2">{pageName}</h2>
      <p>저장된 리소스: {tabCount}개</p>
      <button
        onClick={handleDeleteClick}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-1 px-2 rounded"
      >
        <IoIosClose />
      </button>
      {showModal && (
        <DeleteModal
          userId={userId}
          pageName={pageName}
          tabUrlName=""
          historyName=""
          isOpen={showModal}
          onCancel={handleToggleModal}
          onDelete={handleConfirmDelete}
          onToggle={handleToggleModal}
        />
      )}
    </div>
  );
};

export default FigmaItem;
