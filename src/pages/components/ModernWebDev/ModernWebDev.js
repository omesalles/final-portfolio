import { Panel } from "../Panel";

export function ModernWebDev() {
  let title = "Modern Web Development";
  let panelLeft = ["React", "React Roouter", "Redux"];
  let panelRight = [1, 2, 3];
  let panelMiddle = ["one", "two", "three"];
  return (
    <Panel
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
