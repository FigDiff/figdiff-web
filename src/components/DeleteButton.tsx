import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import DeleteModal from "./DeleteModal";

interface DeleteButtonProps {
  userId: string;
  pageName: string;
  tabUrlName: string;
  historyName: string;
  className: string;
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  userId,
  pageName,
  tabUrlName,
  historyName,
  className,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        className={`absolute top-0 right-0 m-0.5 p-0.5 bg-gray-100 hover:bg-gray-300 rounded-full ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          handleToggleModal();
        }}
      >
        <IoIosClose />
      </button>
      {showModal && (
        <DeleteModal
          userId={userId}
          pageName={pageName}
          tabUrlName={tabUrlName}
          historyName={historyName}
          isOpen={showModal}
          onCancel={handleToggleModal}
          onDelete={onDelete}
          onToggle={handleToggleModal}
        />
      )}
    </>
  );
};

export default DeleteButton;
