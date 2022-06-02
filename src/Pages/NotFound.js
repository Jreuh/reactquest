import Pied from "../component/Footer";
import Navbar from "../component/Header";
import L404 from "../asset/img/404.jpg";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <p>Il n'y a rien ici</p>
      <img src={L404}></img>
      <Pied />
    </div>
  );
}
