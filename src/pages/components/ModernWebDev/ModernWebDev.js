import { Panel } from "../Panel";

export function ModernWebDev() {
  let title = "Modern Web Development";
  let panelLeft = ["html react parser", "React Roouter", "Redux", "REST"];
  let panelRight = ["immutable", "prebuild components", 3];
  let panelMiddle = ["https://www.npmjs.com/package/html-react-parser: A library that allows react interpret " + 
  "a javascript string as HTML", "two", "three", "four"];
  return (
    <Panel
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
