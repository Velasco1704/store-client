import { Route, Routes } from "react-router-dom";
import { routes } from "@pages/routes";

export const App = () => {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};
