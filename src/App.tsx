import { useState } from "react";
import { MdOutlineHelpOutline } from "react-icons/md";
import { gb } from "./assets/images";
import { navItems } from "./constants";

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState("Stays");

  return (
    <>
      <header className="bg-blue-900 p-4">
        <div className="mx-auto flex max-w-[62rem] flex-col gap-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-white">
              Booking.com
            </a>
            <div className="flex items-center gap-8">
              <a href="/" className="text-sm font-bold text-white">
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
              <a href="/" className="text-white">
                <MdOutlineHelpOutline size="1.5rem" />
              </a>
              <a href="/" className="text-sm font-bold text-white">
                List your property
              </a>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="min-w-[4.375rem] rounded-sm border border-blue-400 bg-white p-1.5 text-sm font-semibold text-blue-500 hover:bg-blue-50"
                >
                  Register
                </button>
                <button
                  type="button"
                  className="min-w-[4.375rem] rounded-sm border border-blue-400 bg-white p-1.5 text-sm font-semibold text-blue-500 hover:bg-blue-50"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <nav>
            <ul className="no-scrollbar flex gap-6 overflow-auto text-sm text-white">
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
