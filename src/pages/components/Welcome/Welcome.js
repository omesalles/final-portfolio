import { Panell } from "../Panell";

export function Welcome() {
  let component = "Welcome";
  let title = "Welcome";
  let panellLeft = [1, 2, 3];
  let panellRight = [1, 2];
  let panellMiddle = ["one", "two", "three"];
  return (
    <Panell
      component={component}
      title={title}
      panellLeft={panellLeft}
      panellRight={panellRight}
      panellMiddle={panellMiddle}
    />
  );
}
