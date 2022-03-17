import { useState } from "react";
import { PopUpForm } from "./PopUpForm";

export function PopUpButton() {
  const [popUpForm, setPopUpForm] = useState(false);
  const openForm = () => {
    setPopUpForm(true);
  };

  const closeForm = () => {
    setPopUpForm(false);
  };

  return (
    <>
      <button className="open-button" onClick={() => openForm()}>
        Contact Me
      </button>
      <PopUpForm show={popUpForm} handleClose={() => closeForm()} />
    </>
  );
}
