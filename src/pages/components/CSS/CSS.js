import { Panel } from "../Panel";

export function CSS() {
  let title = "CSS";
  let panelLeft = [
    "Box model",
    "Flex",
    "Grid",
    "Animations",
    "!important",
    "basic design rules",
  ];
  let panelRight = ["W3Schools", "CSS tricks", "3"];
  let panelMiddle = [
    "Box model",
    "Flex",
    "Grid",
    "Animations",
    "The !important rule can be added to any style property and overrides ALL previous styling rules for that" +
      " specific property",
    "The website <a href='http://bettermotherfuckingwebsite.com/'>http://bettermotherfuckingwebsite.com/</a> provides some basic rules to help improve your website " +
      "appearance",
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
