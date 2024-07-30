import { useNavigate } from "react-router-dom";

import DeleteButton from "./DeleteButton";

interface FigmaItemProps {
  pageName: string;
  tabCount: number;
}

const FigmaItem: React.FC<FigmaItemProps> = ({ pageName, tabCount }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/history/${pageName}`);
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
    </div>
  );
};

export default FigmaItem;
