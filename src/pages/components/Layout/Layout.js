import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./Layout.css";

export function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
}
