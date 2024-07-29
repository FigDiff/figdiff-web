import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";

const RouterComponent = () => {
  const elements = useRoutes(routes);
  return elements;
};

const App = () => {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
};

export default App;
