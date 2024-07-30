interface HistoryCardProps {
  createdAt: string;
  description: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  createdAt,
  description,
}) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg m-2 flex-1 max-w-xs">
      <h3 className="font-semibold">{createdAt}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HistoryCard;
