import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function Layout() {
  return (
    <Provider store={store}>
      <Header />
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </Provider>
  );
}
