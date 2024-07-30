import DeleteButton from "./DeleteButton";

interface HistoryCardProps {
  createdAt: string;
  description: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  createdAt,
  description,
}) => {
  return (
    <div className="relative bg-white p-4 shadow rounded-lg m-2 flex-1 max-w-xs">
      <DeleteButton pageName={description} className="absolute top-0 right-0" />
      <h3 className="font-semibold">{createdAt}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HistoryCard;
