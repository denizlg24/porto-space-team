import { useEffect, useState } from "react";
import logo from "../assets/Logo-white-transparent.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [hamburgerDisplaying, setHamburguerDisplaying] = useState(false);
  const size = useWindowSize();
  return (
    <header className="fixed top-0 w-full bg-transparent p-4 flex items-center justify-center">
      <div className="max-w-[1440px] w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="max-w-[2.5rem]"
          >
            <img src={logo} alt="" />
          </button>
          {size.width >= 1024 && (
            <div className="flex gap-4 items-center border-b-[1px] border-white pl-52 py-2">
              <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white font-sofia font-semibold text-xl">
                About Us
              </h1>
              <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white  font-sofia font-semibold text-xl">
                Departments
              </h1>
              <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white  font-sofia font-semibold text-xl">
                Partners
              </h1>
              <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white  font-sofia font-semibold text-xl">
                Contacts
              </h1>
            </div>
          )}
          {size.width < 1024 && (
            <div className="text-white h-full w-full max-w-[2.5rem] p-2 relative">
              <button
                className="text-white max-w-[2.5rem] w-full h-full"
                onClick={() => {
                  setHamburguerDisplaying((prev) => !prev);
                }}
              >
                <GiHamburgerMenu className="text-white max-w-[2.5rem] w-full h-full" />
              </button>
              {hamburgerDisplaying && (
                <div className="absolute right-2 p-4 bg-black border-[1px] border-white flex flex-col gap-2">
                  <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white font-sofia font-semibold text-xl">
                    About Us
                  </h1>
                  <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white  font-sofia font-semibold text-xl">
                    Departments
                  </h1>
                  <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white  font-sofia font-semibold text-xl">
                    Partners
                  </h1>
                  <h1 className="text-gray-200 transition-colors hover:cursor-pointer hover:text-white  font-sofia font-semibold text-xl">
                    Contacts
                  </h1>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Header;
