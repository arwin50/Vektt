import { useState } from "react";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full flex justify-center h-20 relative">
      <nav className="w-2/3 flex justify-between items-center">
        <div className="justify-start">
          <a href="#hero">
            <img src="/logo.png" alt="Logo" className="h-20 hover:scale-110" />
          </a>
        </div>
        {/* Hamburger button for mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {/* Navigation links */}
        <div
          className={`gap-20 flex items-center font-semibold text-lg lg:flex ${
            menuOpen ? "flex" : "hidden"
          } absolute lg:static top-16 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none p-6 lg:p-0 rounded-lg lg:rounded-none z-50`}
          style={{ minWidth: menuOpen ? "200px" : undefined }}
        >
          <a
            href="#services"
            className="block py-2 px-4 hover:text-teal-600"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("services");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }
            }}
          >
            Services
          </a>
          <a
            href="#team"
            className="block py-2 px-4 hover:text-teal-600"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("team");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }
            }}
          >
            Our Team
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 hover:text-teal-600"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }
            }}
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
}
