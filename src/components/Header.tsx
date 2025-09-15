import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Features", path: "/feature" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 py-4 flex justify-between items-center">
        <Link to="/home" className="flex items-center">
          <img
            src="public/assests/Home/toothscribe_logo.svg"
            alt="EarlyRead Logo"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex items-center space-x-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`transition font-jakarta font-medium text-[16px] leading-[170%] tracking-[0px] px-0 py-1`}
                style={{
                  color: isActive ? "#0D9488" : undefined,
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/demo"
            className="inline-flex items-center justify-center px-8 py-3 text-[#0D9488] rounded-[16px] text-center border transition"
            style={{
              border: "1px solid #0D9488",
              minWidth: "150px",
            }}
          >
            Book a Demo
          </Link>

          <button
            onClick={() => {
              navigate("/requestDemo");
            }}
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
