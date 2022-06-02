import Pied from "../component/Footer";
import Navbar from "../component/Header";
import L404 from "../asset/img/404.jpg";
import "../styles/notFound.css";

export default function NotFound() {
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="body404">
        <p>Il n'y a rien ici</p>
        <img src={L404}></img>
      </div>
      <Pied />
    </div>
  );
}
