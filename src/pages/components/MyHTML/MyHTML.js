import { Panell } from "../Panell";

export function MyHTML() {
  let title = "HTML";
  let panellLeft = [1, 2, 3];
  let panellRight = [1, 2, 3];
  let panellMiddle = ["one", "two", "three"];
  return (
    <Panell
      title={title}
      panellLeft={panellLeft}
      panellRight={panellRight}
      panellMiddle={panellMiddle}
    />
  );
}
