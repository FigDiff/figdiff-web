import React, { useEffect, useState } from "react";
import axios from "axios";
import FigmaItem from "../components/FigmaItem";
import { useParams } from "react-router-dom";

interface PageData {
  pageName: string;
  tabUrls: string[];
}

interface UserData {
  pageNames: PageData[];
}

const DashBoardPage: React.FC = () => {
  const [data, setData] = useState<UserData | null>(null);
  const { userId } = useParams();

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

  const handleDeletePage = async (pageName: string) => {
    try {
      await axios.patch(`${import.meta.env.VITE_SERVER_URL}/delete-page`, {
        userId,
        pageName,
      });

      setData((prevData) => {
        if (!prevData) return null;

        return {
          ...prevData,
          pageNames: prevData.pageNames.filter(
            (page) => page.pageName !== pageName,
          ),
        };
      });
    } catch (error) {
      console.error("Error deleting page:", error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 h-full">
      <div className="grid grid-cols-4 gap-4">
        {data.pageNames.map((page) => (
          <FigmaItem
            key={page.pageName}
            userId={userId as string}
            pageName={page.pageName}
            tabCount={page.tabUrls.length}
            onDelete={handleDeletePage}
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoardPage;
