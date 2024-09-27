import Layout from "./components/Layout";
import InitialPage from "./pages/InitialPage";
import DashBoardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ForbiddenPage from "./pages/ForbiddenPage";

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
      { path: "/dash/:userId", element: <DashBoardPage /> },
      { path: "/dash/:userId/history/:pageName", element: <HistoryPage /> },
      { path: "/dash/:userId/notfoundpage", element: <NotFoundPage /> },
      { path: "/dash/:userId/forbiddenpage", element: <ForbiddenPage /> },
    ],
  },
];

export default routes;
