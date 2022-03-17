import { Welcome } from "./components/Welcome";
import { MyHTML } from "./components/MyHTML";

export const globalRoutes = [
  { path: "/", titol: "Welcome", element: <Welcome /> },
  { path: "HTML", titol: "HTML", element: <MyHTML /> },
  { path: "CSS", titol: "CSS", element: <MyHTML /> },
];
