import { useNavigate } from "react-router-dom";

interface FigmaItemProps {
  pageName: string;
  urlName: string[];
}

const FigmaItem: React.FC<FigmaItemProps> = ({ pageName, urlName }) => {
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
      <ul>
        {urlName.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
};

export default FigmaItem;
