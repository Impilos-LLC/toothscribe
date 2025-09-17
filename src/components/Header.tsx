import React, { useEffect, useState } from "react";

const navItems = [
  { label: "Home", targetId: "home" },
  { label: "Features", targetId: "feature" },
  { label: "About", targetId: "about" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    const header = document.querySelector("header");
    const headerOffset = header ? header.clientHeight : 0;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset - 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      navItems.forEach(({ targetId }) => {
        const section = document.getElementById(targetId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = targetId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-grid-lines">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="public/assests/Home/toothscribe_logo.svg"
            alt="ToothScribe Logo"
            className="h-10 w-auto"
          />
        </div>

        <nav className="flex items-center space-x-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.targetId)}
              className={`transition font-jakarta font-medium text-[16px] leading-[170%] tracking-[0px] px-0 py-1 ${
                activeSection === item.targetId
                  ? "text-[#0D9488]"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("demo")} // Optional demo section
            className="inline-flex items-center justify-center px-8 py-3 text-[#0D9488] rounded-[16px] text-center border transition"
            style={{
              border: "1px solid #0D9488",
              minWidth: "150px",
            }}
          >
            Book a Demo
          </button>

          <button
            onClick={() => alert("Redirect to Signin")} // Or implement Signin logic
            className="inline-flex items-center justify-center px-8 py-3 text-white text-sm font-medium transition rounded-[16px]"
            style={{
              background: "linear-gradient(95deg, #2DD4BF 0%, #0F766E 100%)",
              minWidth: "150px",
            }}
          >
            Signin
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
