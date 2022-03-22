import { Panel } from "../Panel";

export function ModernWebDev() {
  let title = "Modern Web Development";
  let panelLeft = ["React", "React Router", "Redux", "REST"];
  let panelRight = ["immutable", "prebuild components", "Reselect library"];
  let panelMiddle = ["one", "two", "three", "four"];
  return (
    <Panel
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
