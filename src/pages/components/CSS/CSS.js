import { Panel } from "../Panel";

export function CSS() {
  let title = "CSS";
  let panelLeft = ["Box model", "Flex", "Grid", "Animations", "!important"];
  let panelRight = ["W3Schools", "CSS tricks", 3];
  let panelMiddle = [
    "Box model",
    "Flex",
    "Grid",
    "Animations",
    "The !important rule can be added to any style property and overrides ALL previous styling rules for that"+
    " specific property",
  ];
  return (
    <Panel
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
