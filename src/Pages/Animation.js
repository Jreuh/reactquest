import Carou from "../component/Carousel";
import Navbar from "../component/Header";
import ColoButt from "../component/ListBouton";
import Caland from "../component/Calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/animation.css";
export default function Animation() {
  return (
    <div>
      <Navbar />;
      <Carou />;
      <ColoButt />;
      <div>
        <Caland />
      </div>
    </div>
  );
}
