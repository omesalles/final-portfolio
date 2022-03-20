import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./Layout.css";

export function Layout() {
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}
