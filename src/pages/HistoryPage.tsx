import { useState } from "react";
import { useParams } from "react-router-dom";

import HistoryCard from "../components/HistoryCard";
import data from "../assets/mockData.json";

interface TabUrl {
  urlName: string;
  history: { date: string; historyName: string }[];
}

interface PageData {
  pageName: string;
  tabUrls: TabUrl[];
}

const HistoryPage: React.FC = () => {
  const { pageName } = useParams<{ pageName: string }>();
  const pageData = data.pageNames.find(
    (page) => page.pageName === pageName,
  ) as PageData;
  const [selectedTab, setSelectedTab] = useState<TabUrl | null>(null);

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/4 border-r border-gray-300">
        <h2 className="text-lg font-semibold mb-4">{pageData?.pageName}</h2>
        <ul>
          {pageData?.tabUrls.map((tab, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => setSelectedTab(tab)}
            >
              {tab.urlName}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        {selectedTab ? (
          <>
            <h3 className="text-lg font-semibold mb-4">
              History for {selectedTab.urlName}
            </h3>
            <div className="flex flex-wrap">
              {selectedTab.history.map((history, index) => (
                <HistoryCard
                  key={index}
                  createdAt={history.date}
                  description={history.historyName}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">Select a URL to view its history.</p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
