import "./Footer.scss";
import linkedin from "@assets/socialnetworks/linkedin.svg";
import instagram from "@assets/socialnetworks/Insta.svg";
import facebook from "@assets/socialnetworks/fb.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="reseaux">
        <img src={linkedin} alt="Logo Linkedin" />
        <img src={facebook} alt="Logo Facebook" />
        <img src={instagram} alt="Logo Instagram" />
      </div>

      <div className="text">
        <h4>Externatic 2022 - tout droit réservés</h4>
      </div>

      <div className="mention">
        <ul>Mentions légales</ul>
        <ul>Politique de confidentialité</ul>
        <ul>Politique de Cookies</ul>
      </div>
    </div>
  );
}

export default Footer;