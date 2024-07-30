import Layout from "./components/Layout";
import InitialPage from "./pages/InitialPage";
import DashBoardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";

interface RouteConfig {
  path?: string;
  element: React.ReactElement;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <InitialPage /> },
      { path: "/dash", element: <DashBoardPage /> },
      { path: "/history/:pageName", element: <HistoryPage /> },
    ],
  },
];

export default routes;
