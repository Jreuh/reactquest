import Ghlogo from "../asset/img/git.png";
import Linlogo from "../asset/img/linkedin.png";
import"../styles/footer.css"
function Pied() {
  return (
    <footer>
      <a href="https://github.com/Jreuh">
        <img className="FooterImg" src={Ghlogo} alt="Logo GitHub"></img>
      </a>
      <p>JR &copy;</p>
      <a href="https://www.linkedin.com/in/jean-ren%C3%A9-decoster-6b2476231/">
        <img className="FooterImg" src={Linlogo} alt="Logo Linkedin"></img>
      </a>
    </footer>
  );
}
export default Pied;
