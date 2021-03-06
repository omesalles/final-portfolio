import { Panel } from "../Panel";

export function Tools() {
  let title = "Tools";
  let panelLeft = [
    "Visual Studio code",
    "node",
    "Github",
    "ESlint",
    "CodeSandbox",
  ];
  let panelRight = null;
  let panelMiddle = ["...", "...", "...", "...", "..."];
  return (
    <Panel
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
