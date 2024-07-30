import FigmaItem from "../components/FigmaItem";
import data from "../assets/mockData.json";

const DashBoardPage: React.FC = () => {
  return (
    <div className="p-4 h-full">
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          팀 초대하기
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.pageNames.map((page) => (
          <FigmaItem
            key={page.pageName}
            pageName={page.pageName}
            urlName={page.tabUrls.map((tab) => tab.urlName)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoardPage;
