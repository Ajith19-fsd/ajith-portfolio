import { useEffect, useState } from "react";

export default function Navbar({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", ref: refs.homeRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Projects", ref: refs.projectsRef },
  ];

  // 🔹 Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        name: item.name,
        top: item.ref.current?.getBoundingClientRect().top,
      }));

      const current = sections.find(
        (section) => section.top >= 0 && section.top < window.innerHeight / 2
      );

      if (current) setActive(current.name);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="relative inline-block px-3 py-1 text-2xl md:text-3xl font-bold cursor-pointer"
          style={{ color: "var(--color-primary)" }}
          onClick={() => {
            scrollToSection(refs.homeRef);
            setActive("Home");
          }}
        >
          AJITH

          {/* Top-left corner */}
          <span
            className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2"
            style={{ borderColor: "var(--color-primary)" }}
          />

          {/* Bottom-right corner */}
          <span
            className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2"
            style={{ borderColor: "var(--color-primary)" }}
          />
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.ref);
                setActive(item.name);
              }}
              className="relative cursor-pointer font-semibold text-lg transition duration-300"
              style={{
                color:
                  active === item.name
                    ? "var(--color-primary)"
                    : "var(--color-text-secondary)",
              }}
            >
              {item.name}

              {/* Active underline */}
              {active === item.name && (
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full rounded"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-md px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.ref);
                setActive(item.name);
                setIsOpen(false);
              }}
              className="block relative text-lg font-medium"
              style={{
                color:
                  active === item.name
                    ? "var(--color-primary)"
                    : "var(--color-text-secondary)",
              }}
            >
              {item.name}

              {/* Mobile active underline */}
              {active === item.name && (
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-10"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
