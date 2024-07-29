import Layout from "./components/Layout";
import Main from "./pages/Main";

interface RouteConfig {
  path?: string;
  element: React.ReactElement;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  {
    element: <Layout />,
    children: [{ path: "/", element: <Main /> }],
  },
];

export default routes.map((route) => ({
  ...route,
  children: route.children?.map((child) => ({
    path: child.path,
    element: child.element,
  })),
}));
