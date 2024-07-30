import React from "react";
import DeleteButton from "./DeleteButton";

interface HistoryCardProps {
  userId: string;
  pageName: string;
  tabUrlName: string;
  historyName: string;
  createdAt: string;
  onDelete: () => void;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  userId,
  pageName,
  tabUrlName,
  historyName,
  createdAt,
  onDelete,
}) => {
  return (
    <div className="relative bg-white p-4 shadow rounded-lg m-2 flex-1 max-w-xs">
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
          <p>{historyName}</p>
        </div>
        {/* <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          x
        </button> */}
      </div>
    </div>
  );
};

export default HistoryCard;
