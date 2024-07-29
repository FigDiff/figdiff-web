import Layout from "./components/Layout";
import InitialPage from "./pages/InitialPage";
import DashboardPage from "./pages/DashboardPage";

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
      { path: "/dash", element: <DashboardPage /> },
    ],
  },
];

export default routes;
