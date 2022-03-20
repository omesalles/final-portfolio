import "./Accordio.css";
import { useState } from "react";
/*const menuItems = {
  First: { text: "Text from first" },
  Second: { text: "Text from second" },
  Third: { text: "Text from third" },
};*/

function MenuItems(props) {
  return (
    <>
      <button
        className={
          "Accordio__menu-item " + (props.showOrNot ? "Accordio__active" : "")
        }
        onClick={props.onPressed}
      >
        {props.theMenu}
      </button>
      <div
        className={
          props.showOrNot ? "Accordio__show-panel" : "Accordio__hide-panel"
        }
      >
        <div className="panel">{props.theText.text}</div>
      </div>
    </>
  );
}

export function Accordio({menuItems}) {
  let numberOfItems = Object.keys(menuItems).length;
  const [whichOpenedMenus, setWhichOpenedMenus] = useState(
    Array(numberOfItems).fill(false)
  );

  const toogleDisplay = (i) => {
    let copyWhichOpenedMenus = Array(numberOfItems).fill(false);
    copyWhichOpenedMenus[i] = !whichOpenedMenus[i];
    setWhichOpenedMenus(copyWhichOpenedMenus);
  };

  return (
    <div className="Accordio__Accordio">
      <div className="Accordio__tab">
        {Object.keys(menuItems).map((x, i) => {
          return (
            <MenuItems
              key={i}
              theMenu={x}
              theText = {menuItems[x]}
              onPressed={() => toogleDisplay(i)}
              showOrNot={whichOpenedMenus[i]}
            />
          );
        })}
      </div>
    </div>
  );
}