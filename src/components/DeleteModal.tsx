interface DeleteModalProps {
  userId: string;
  pageName: string;
  tabUrlName: string;
  historyName: string;
  isOpen: boolean;
  onCancel: () => void;
  onDelete: (
    userId: string,
    pageName: string,
    tabUrlName: string,
    historyName: string,
  ) => void;
  onToggle: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  userId,
  pageName,
  tabUrlName,
  historyName,
  isOpen,
  onCancel,
  onDelete,
  onToggle,
}) => {
  if (!isOpen) return null;

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onCancel();
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    userId: string,
    pageName: string,
    tabUrlName: string,
    historyName: string,
  ) => {
    event.stopPropagation();

    onDelete(userId, pageName, tabUrlName, historyName);
    onToggle();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onCancel();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4">
          해당 콘텐츠를 삭제하시겠습니까?
        </h2>
        <p>삭제 시 해당 데이터를 다시 복구할 수 없습니다.</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            취소
          </button>
          <button
            onClick={(ev) =>
              handleDelete(ev, userId, pageName, tabUrlName, historyName)
            }
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
