import Carou from "../component/Carousel";
import Navbar from "../component/Header";
import ColoButt from "../component/ListBouton";
import Caland from "../component/Calendar";
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
