import { Panel } from "../Panel";

export function CSS() {
  let title = "CSS";
  let panelLeft = [
    "Box model",
    "Flex",
    "Grid",
    "Animations",
    "!important",
    "Basic design rules",
    "The Holy Grail",
  ];
  let panelRight = ["W3Schools", "A Complete Guide to Flexbox"];
  let panelMiddle = [
    "Box model",
    "Flex",
    "Grid",
    "Animations",
    "The !important rule can be added to any style property and overrides ALL previous styling rules for that" +
      " specific property",
    "The website <a href='http://bettermotherfuckingwebsite.com/'>http://bettermotherfuckingwebsite.com/</a> provides some basic rules to help improve your website " +
      "appearance",
    "<a href='https://philipwalton.github.io/solved-by-flexbox/'>Solved by Flexbox</a> contains examples of using FlexBox to layout content",
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
