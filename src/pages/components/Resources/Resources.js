import { Panel } from "../Panel";

export function Resources() {
  let title = "Resources";
  let panelLeft = ["W3Schools", "MDN Web Docs", "CSS Zen Garden"];
  let panelRight = null;
  let panelMiddle = ["This is the starting point for anything related with web development "+
  " comprehensive documenatation for HTML, CSS and JavaScript, and information about many tools related" +
  "to web development and programming in general",
  "",
  "A demonstration of what can be accomplished through CSS-based design. Check how the style sheet completely transforms a webpage "];
  return (
    <Panel
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
