import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./Components/Config/PrivateRoute";
import RoutePaths from "./routes";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={
            <PrivateRoute>
              <RoutePaths/>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
