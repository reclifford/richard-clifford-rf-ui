import Logo from "../assets/logo/logo-rainfocus-icon.jpg";

export default function Header() {
  return (
    <header className="flex flex-dir-col-rev justify-between align-center gap-24">
      <div id="header-content" className="flex gap-16">
        <img src={Logo} alt="RainFocus" />
        <div id="header-copy" className="flex flex-dir-col gap-8">
          <h1>RainFocus Summit</h1>
          <div id="date-location">
            <p className="date">December 15th</p>
            <p className="location">Lehi, Utah</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button>Edit Event</button>
      </div>
    </header>
  );
}
