import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Config/PrivateRoute";
import routes from "./Routes";

const RoutePaths = () => (
  <Routes>
    {routes.map(
      (route) =>
        route.elements &&
        route.elements.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <PrivateRoute>
                <route.component />
              </PrivateRoute>
            }
          />
        ))
    )}
  </Routes>
);

export default RoutePaths;
