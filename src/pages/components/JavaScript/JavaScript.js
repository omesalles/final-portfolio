import { Panel } from "../Panel";

export function JavaScript() {
  let title = "JavaScript";
  let panelLeft = [1, 2, 3];
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
