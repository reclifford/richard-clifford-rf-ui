import logoSmall from "../assets/logo/logo-rainfocus-small.svg";
import logoGraphic from "../assets/logo/logo-rainfocus-icon.jpg";

export default function Sidebar() {
  return (
    <aside id="sidebar" className="flex justify-between">
      <div id="top" className="flex align-center gap-24">
        <button className="flex">
          <img src={logoSmall} />
        </button>
        <button className="flex">
          <img src={logoGraphic} />
        </button>
      </div>
      <div id="bottom">
        <div id="nav-user" className="flex align-center justify-center">
          <div className="flex align-center justify-center">FL</div>
        </div>
      </div>
    </aside>
  );
}
