import { Panel } from "../Panel";

export function Welcome() {
  let component = "Welcome";
  let title = "Welcome";
  let panelLeft = [1, 2, 3];
  let panelRight = [1, 2];
  let panelMiddle = ["one", "two", "three"];
  return (
    <Panel
      component={component}
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
