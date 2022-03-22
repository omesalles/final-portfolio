import { Panel } from "../Panel";

export function JavaScript() {
  let title = "JavaScript";
  let panelLeft = ["The Spread Operator", "Arrays and Objects"];
  let panelRight = [];
  let panelMiddle = [
    "This operator allows copying arrays and objects with a small number of commands. " +
      "The <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'>MDN</a> " +
      " website has a place where you can check the results of your code ",
    "JavaScript arrays and Objects are all over JS, W3Schools is a good reference for " +
      "<a href='https://www.w3schools.com/js/js_arrays.asp'>arrays</a> and <a href='https://www.w3schools.com/js/js_objects.asp'>Objects</a>.<br>" +
      "The built in <a href='https://www.w3schools.com/jsref/jsref_keys.asp'>Object.keys() Method</a> is useful for iterating through arrays.",
    "",
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
