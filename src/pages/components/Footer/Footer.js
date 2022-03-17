import { PopUpButton } from "../ContactButton/PopUpButton";
import "./Footer.css";
import { ReactComponent as Technocampus } from "../../../assets/technocampus.svg";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Technocampus className="technocampus-img" />
        <PopUpButton />
        <div className="soc">Servei Públic d'Ocupació de Catalunya</div>
      </div>
    </footer>
  );
}
