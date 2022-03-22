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
    "CSS Specificity",
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
    "If an element is targeted by multiple selectors, browser use the specificity of the selector to determine which styling to apply. " +
      "The specificity is split up in different levels. A single value in a higher level is more important than all levels below it.<br>" +
      "The following rules apply:" +
      "<li>The universal selector * has no specificity.</li>" +
      "<li>properties with !important are applied even if the selector is less specific.</li>" +
      "<li>…Except for the properties with !important in same or a higher specificity selectors later in your CSS.</li>" +
      "<li>…Except for the style='' attribute on an element.</li>" +
      "<li>If you use a pseudo class like :not() or :is(), the selector inside it with the highest specificity determines the specificity.</li>" +
      "<li>Anything in a :where() has no specificity." +
      "<li>For :nth-child() and :nth-last-child() pseudo-classes the specificity is the combination of the pseudo-class itself (0,1,0) plus the" +
      " most specific of the selectors in them.</li>" +
      "<li>Child or sibling selectors (>, ~, +) add no specificity.</li>",
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
