import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryCard from "../components/HistoryCard";
import DeleteButton from "../components/DeleteButton";
import axios from "axios";

interface History {
  date: string;
  historyName: string;
}

interface TabUrl {
  tabUrlName: string;
  history: History[];
}

interface PageData {
  pageName: string;
  tabUrls: TabUrl[];
}

interface UserData {
  pageNames: PageData[];
}

const HistoryPage: React.FC = () => {
  const [data, setData] = useState<UserData | null>(null);
  const { pageName, userId } = useParams<{
    pageName: string;
    userId: string;
  }>();
  const [selectedTab, setSelectedTab] = useState<TabUrl | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/${userId}`,
        );
        setData(response.data.userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const pageData = data.pageNames.find(
    (page: PageData) => page.pageName === pageName,
  ) as PageData;

  const handleDeleteTabUrl = async (
    userId: string,
    pageName: string,
    tabUrlName: string,
    historyName: string,
  ) => {
    try {
      await axios.patch(`${import.meta.env.VITE_SERVER_URL}/delete-taburl`, {
        userId,
        pageName,
        tabUrlName,
        historyName,
      });

      setData((prevData) => {
        if (!prevData) return null;

        const updatedPageNames = prevData.pageNames.map((page) => {
          if (page.pageName === pageName) {
            return {
              ...page,
              tabUrls: page.tabUrls.filter(
                (tab) => tab.tabUrlName !== tabUrlName,
              ),
            };
          }
          return page;
        });

        return {
          ...prevData,
          pageNames: updatedPageNames,
        };
      });

      if (selectedTab?.tabUrlName === tabUrlName) {
        setSelectedTab(null);
      }
    } catch (error) {
      console.error("Error deleting tab URL:", error);
    }
  };

  const handleDeleteHistory = async (
    userId: string,
    pageName: string,
    tabUrlName: string,
    historyName: string,
  ) => {
    if (!selectedTab) return;

    try {
      await axios.patch(`${import.meta.env.VITE_SERVER_URL}/delete-history`, {
        userId,
        pageName,
        tabUrlName,
        historyName,
      });

      setData((prevData) => {
        if (!prevData) return null;

        const updatedPageNames = prevData.pageNames.map((page) => {
          if (page.pageName === pageName) {
            return {
              ...page,
              tabUrls: page.tabUrls.map((tab) => {
                if (tab.tabUrlName === tabUrlName) {
                  return {
                    ...tab,
                    history: tab.history.filter(
                      (history) => history.historyName !== historyName,
                    ),
                  };
                }
                return tab;
              }),
            };
          }
          return page;
        });

        return {
          ...prevData,
          pageNames: updatedPageNames,
        };
      });

      setSelectedTab((prevTab) => {
        if (!prevTab) return null;

        return {
          ...prevTab,
          history: prevTab.history.filter(
            (history) => history.historyName !== historyName,
          ),
        };
      });
    } catch (error) {
      console.error("Error deleting history:", error);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/4 border-r border-gray-300">
        <h2 className="text-lg font-semibold mb-4">{pageData?.pageName}</h2>
        <ul>
          {pageData?.tabUrls.map((tab, index) => (
            <li
              key={index}
              onClick={() => setSelectedTab(tab)}
              className="relative cursor-pointer hover:bg-gray-200 p-2"
            >
              <span>{tab.tabUrlName}</span>
              <DeleteButton
                userId={userId as string}
                pageName={pageName as string}
                tabUrlName={tab.tabUrlName}
                historyName="void"
                className="top-2 right-0"
                onDelete={() =>
                  handleDeleteTabUrl(
                    userId as string,
                    pageName as string,
                    tab.tabUrlName,
                    "void",
                  )
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        {selectedTab ? (
          <>
            <h3 className="text-lg font-semibold mb-4">
              History for {selectedTab.tabUrlName}
            </h3>
            <div className="flex flex-wrap">
              {selectedTab.history.map((history, index) => (
                <HistoryCard
                  key={index}
                  createdAt={history.date}
                  userId={userId as string}
                  pageName={pageName as string}
                  tabUrlName={selectedTab.tabUrlName}
                  historyName={history.historyName}
                  onDelete={() =>
                    handleDeleteHistory(
                      userId as string,
                      pageName as string,
                      selectedTab.tabUrlName,
                      history.historyName,
                    )
                  }
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
