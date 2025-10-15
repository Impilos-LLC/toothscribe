import React, { useEffect, useState } from "react";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { handleNavClick } from "../utility/scrollUtils";

const navItems = [
  { label: "Home", targetId: "home" },
  { label: "Features", targetId: "feature" },
  { label: "About", targetId: "about" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/Home/toothscribe_logo.svg"
            alt="ToothScribe Logo"
            className="h-10 w-60"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.targetId)}
              className={`transition font-jakarta font-medium text-[16px] leading-[170%] tracking-[0px] px-0 py-1 cursor-pointer ${
                activeSection === item.targetId
                  ? "text-[#0D9488]"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("demo")}
            className="inline-flex items-center justify-center px-6 py-3 text-[#0D9488] rounded-[16px] text-center border border-[#0D9488] transition duration-300 cursor-pointer hover:bg-[#0D9488] hover:text-white"
            style={{
              minWidth: "150px",
            }}
          >
            Book a Demo
          </button>

          <button
            onClick={() => window.open("https://app.toothscribe.ai/", "_blank")}
            className="inline-flex items-center justify-center px-6 py-3 text-white text-sm font-medium transition rounded-[16px] cursor-pointer"
            style={{
              background: "linear-gradient(95deg, #2DD4BF 0%, #0F766E 100%)",
              minWidth: "150px",
            }}
          >
            Signin
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <CloseLineIcon /> : <MenuLineIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.targetId)}
                className={`text-left font-jakarta font-medium text-[16px] leading-[170%] tracking-[0px] px-0 py-1 cursor-pointer ${
                  activeSection === item.targetId
                    ? "text-[#0D9488]"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("demo")}
              className="w-full inline-flex items-center justify-center px-6 py-2 text-[#0D9488] rounded-[16px] text-center border border-[#0D9488] transition duration-300 cursor-pointer hover:bg-[#0D9488] hover:text-white"
            >
              Book a Demo
            </button>

            <button
              onClick={() =>
                window.open("https://app.toothscribe.ai/", "_blank")
              }
              className="w-full inline-flex items-center justify-center px-6 py-3 text-white text-sm font-medium transition rounded-[16px] cursor-pointer"
              style={{
                background: "linear-gradient(95deg, #2DD4BF 0%, #0F766E 100%)",
              }}
            >
              Signin
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
