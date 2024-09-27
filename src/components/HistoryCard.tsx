import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import ImageModal from "./ImageModal";

interface HistoryCardProps {
  userId: string;
  pageName: string;
  tabUrlName: string;
  historyName: string;
  createdAt: string;
  imageUrls: string[];
  onDelete: () => void;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  userId,
  pageName,
  tabUrlName,
  historyName,
  createdAt,
  imageUrls,
  onDelete,
}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  const handleImageModal = () => {
    setIsImageModalOpen(!isImageModalOpen);
  };

  return (
    <div
      onClick={() => {
        handleImageModal();
      }}
      className="relative cursor-pointer bg-white p-4 shadow rounded-lg m-2 flex-1 max-w-xs"
    >
      <div className="flex justify-between items-center">
        <div>
          <DeleteButton
            userId={userId}
            pageName={pageName}
            tabUrlName={tabUrlName}
            historyName={historyName}
            className="absolute top-0 right-0"
            onDelete={onDelete}
          />
          <h3 className="font-semibold">{createdAt}</h3>
          {isImageModalOpen && (
            <ImageModal
              isOpen={isImageModalOpen}
              imageUrls={imageUrls}
              onCancel={handleImageModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
