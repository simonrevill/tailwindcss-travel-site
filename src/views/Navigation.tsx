import { useState } from "react";
import { MdMenu, MdClose, MdOutlineHelpOutline } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { gb } from "../assets/images";
import { navItems } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-blue-900 p-4">
      <div className="mx-auto flex max-w-[62rem] flex-col gap-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white">
            Booking.com
          </a>
          <div className="relative flex items-center gap-8">
            <div
              className={`items-center gap-8 max-lg:absolute max-lg:right-0 max-lg:top-[1.75rem] max-lg:w-[50vw] max-lg:border-2 max-lg:border-blue-500 max-lg:bg-white max-lg:p-4 lg:flex ${
                isMobileMenuOpen
                  ? "flex max-lg:flex-col max-lg:items-start"
                  : "hidden"
              }`}
            >
              <Link
                to="/"
                className="text-sm font-bold text-white max-lg:text-black"
              >
                GBP
              </Link>
              <Link to="/">
                <img
                  src={gb}
                  alt="Language - English"
                  className="rounded-full"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                to="/"
                aria-label="Help"
                className="text-white max-lg:text-black"
              >
                <MdOutlineHelpOutline size="1.5rem" />
              </Link>
              <Link
                to="/"
                className="text-sm font-bold text-white max-lg:text-black"
              >
                List your property
              </Link>
            </div>
            <div className="flex gap-2">
              <Link
                to="/"
                className="rounded-full border p-1 text-white md:hidden"
                aria-label="Your profile"
              >
                <BiUser size="1.25rem" />
              </Link>
              <button
                type="button"
                className="hidden min-w-[4.375rem] rounded-sm border border-blue-400 bg-white p-1.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 md:block"
              >
                Register
              </button>
              <button
                type="button"
                className="hidden min-w-[4.375rem] rounded-sm border border-blue-400 bg-white p-1.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 md:block"
              >
                Sign in
              </button>
            </div>
            <div
              className="cursor-pointer text-white lg:hidden"
              onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
            >
              {isMobileMenuOpen ? (
                <MdClose size="1.5rem" />
              ) : (
                <MdMenu size="1.5rem" />
              )}
            </div>
          </div>
        </div>
        <nav>
          <ul className="no-scrollbar flex gap-2 overflow-auto text-sm text-white">
            {navItems.map(({ label, link, icon: Icon }) => (
              <Link to={link} key={label}>
                <li
                  className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-xs hover:border-white ${
                    location.pathname === link ? "border-white bg-blue-800" : ""
                  }`}
                >
                  <Icon size="1.25rem" />
                  {label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
