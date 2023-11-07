import { useState } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  function OpenMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <header className=" w-5/6 mx-auto my-4 z-50 bg-transparent">
        <nav className="flex items-center justify-between ">
          <div>
            <h1 className="text-xl text-black">
              <b>DGTL</b>mart{" "}
            </h1>
          </div>
          <div className="sm:flex gap-4 items-center hidden">
            <a>Home</a>
            <a>About</a>
            <a className="px-4 py-1.5 bg-primary rounded-md text-white font-bold">
              Contact
            </a>
          </div>
          <div onClick={() => OpenMenu()} className="sm:hidden block">
            <svg
              viewBox="0 0 24 24"
              height="2em"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Menu_Alt_01">
                  {" "}
                  <path
                    id="Vector"
                    d="M12 17H19M5 12H19M5 7H19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </nav>
      </header>
      {showMenu ? (
        <div className="absolute -top-4 bg-primary h-screen w-full z-50">
          <section className="w-5/6 mx-auto my-6">
            <div onClick={() => OpenMenu()} className="flex justify-end">
              <svg
                viewBox="0 0 1024 1024"
                height="2em"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#000000"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="w-full mt-40 flex flex-col items-center justify-center gap-12 text-3xl font-bold">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
