import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import DeleteModal from "./DeleteModal";

interface DeleteButtonProps {
  pageName: string;
  className: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ pageName, className }) => {
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
          isOpen={showModal}
          onCancel={handleToggleModal}
          onDelete={() => {
            console.log(`${pageName} 페이지 삭제 처리`);
            handleToggleModal();
          }}
        />
      )}
    </>
  );
};

export default DeleteButton;
