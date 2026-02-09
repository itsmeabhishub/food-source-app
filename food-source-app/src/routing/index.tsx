import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { urlPaths } from "./urlPaths";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Home from "../component/home/Home";

export default function RoutingPiolt() {
  const { HOME_PATH, LOGIN_PATH } = urlPaths;

  const redirectPath: any = HOME_PATH;

  const PrivateRouting = () => {
    const isAuthincated = true;
    return isAuthincated ? <Outlet /> : <Navigate to={LOGIN_PATH} replace />;
  };
  const renderRouting = (
    <Router>
      <Header />
      <div className="routing-component">
        <Routes>
          <Route path="*" element={<Navigate to={redirectPath} replace />} />
          <Route element={<PrivateRouting />}>
            <Route path={HOME_PATH} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
  return renderRouting;
}
