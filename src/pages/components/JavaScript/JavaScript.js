import { Panel } from "../Panel";

export function JavaScript() {
  let title = "JavaScript";
  let panelLeft = ["The Spread Operator", "2", "3"];
  let panelRight = ["2", "3"];
  let panelMiddle = [
    "This operator allows copying arrays and objects with a small number of commands. " +
      "The <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'>MDN</a> " +
      " website has a place where you can check the results of your code ",
    "two",
    "three",
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
