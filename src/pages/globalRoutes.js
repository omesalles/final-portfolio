import { Welcome } from "./components/Welcome";
import { MyHTML } from "./components/MyHTML";
import { CSS } from "./components/CSS";
import { JavaScript } from "./components/JavaScript";
import { ModernWebDev } from "./components/ModernWebDev";
import { Resources } from "./components/Resources";
import { Tools } from "./components/Tools";

export const globalRoutes = [
  { path: "/", titol: "Welcome", element: <Welcome /> },
  { path: "HTML", titol: "HTML", element: <MyHTML /> },
  { path: "CSS", titol: "CSS", element: <CSS /> },
  { path: "JavaScript", titol: "JavaScript", element: <JavaScript /> },
  { path: "ModernWebDev", titol: "ModernWebDev", element: <ModernWebDev /> },
  { path: "Tools", titol: "Tools", element: <Tools /> },
  { path: "Resources", titol: "Resources", element: <Resources /> },
];
