import { PopUpButton } from "../ContactButton/PopUpButton";
import "./Footer.css";
import { ReactComponent as Technocampus } from "../../../assets/technocampus.svg";

export function Footer() {
  return (
    <footer>
      <Technocampus className="tecnocampus-img" />
      <div className="soc">Servei Públic d'Ocupació de Catalunya</div>
      <PopUpButton />
    </footer>
  );
}
