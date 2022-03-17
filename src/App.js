import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/components/Layout";
import { globalRoutes } from "./pages/globalRoutes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {globalRoutes.map((v, i) => {
            return <Route key={i} path={v.path} element={v.element} />;
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
