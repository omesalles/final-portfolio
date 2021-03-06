import { Panel } from "../Panel";

export function MyHTML() {
  let title = "HTML";
  let panelLeft = ["The box model", "div and span", "HTML DOM"];
  let panelRight = ["W3Schools", "WebFlow"];
  let panelMiddle = [
    "All elements are boxes. Every element on this web page is treated as a box — " +
      "imagine an invisible boundary around each element. These boxes naturally sit next to each other or" +
      "stack on top of each other, depending on their properties.",
    "The <span> tag is an inline container" +
      "used to mark up a part of a text, or a part of a document. The <span> tag is much like the <div> " +
      "element, but <div> is a block-level element and <span> is an inline element.",
    "The <a href='https://www.w3schools.com/js/js_htmldom.asp'>HTML DOM</a>, JavaScript can access and change all the elements of an HTML document.",
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
