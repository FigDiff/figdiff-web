import { useNavigate } from "react-router-dom";

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
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
      onClick={handleItemClick}
    >
      <h2 className="font-bold text-xl mb-2">{pageName}</h2>
      <p>저장된 리소스: {tabCount}개</p>
    </div>
  );
};

export default FigmaItem;
