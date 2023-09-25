import { useState } from "react";
import { MdMenu, MdClose, MdOutlineHelpOutline } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { gb } from "./assets/images";
import { navItems } from "./constants";

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState("Stays");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  return (
    <>
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
                <a
                  href="/"
                  className="text-sm font-bold text-white max-lg:text-black"
                >
                  GBP
                </a>
                <a href="/">
                  <img
                    src={gb}
                    alt="Language - English"
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="/"
                  aria-label="Help"
                  className="text-white max-lg:text-black"
                >
                  <MdOutlineHelpOutline size="1.5rem" />
                </a>
                <a
                  href="/"
                  className="text-sm font-bold text-white max-lg:text-black"
                >
                  List your property
                </a>
              </div>
              <div className="flex gap-2">
                <a
                  href="/"
                  className="rounded-full border p-1 text-white md:hidden"
                  aria-label="Your profile"
                >
                  <BiUser size="1.25rem" />
                </a>
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
              {navItems.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-xs hover:border-white ${
                    activeNavItem === label ? "border-white bg-blue-800" : ""
                  }`}
                  onClick={() => setActiveNavItem(label)}
                >
                  <Icon size="1.25rem" />
                  {label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div></div>
      </main>
    </>
  );
};

export default App;
