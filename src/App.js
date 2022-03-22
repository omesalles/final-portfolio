import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/components/Layout";
import { globalRoutes } from "./pages/globalRoutes";
import "./App.css";
function App() {
  return (
    <BrowserRouter basename="/final-portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          {globalRoutes.map((v, i) => {
            return <Route key={i} path={v.path} element={v.element} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
