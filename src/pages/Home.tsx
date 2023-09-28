import { useEffect, useState } from "react";
import mainLogo from "../assets/logo1black_transparent_background.png";
import { BsRocketFill } from "react-icons/bs";

const Home = () => {
  const [smokePercentage, setSmokePercentage] = useState(0);
  const [sloganDisplaying, setSloganDisplaying] = useState(false);
  const slogan = "We are ready for launch...";
  const [currentSlogan, setCurrentSlogan] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEffect(() => {
    const timer = setInterval(() => {
      if (smokePercentage === 100) {
        clearInterval(timer);
        return;
      }
      setSmokePercentage((prev) => prev + 1);
    }, 15);

    return () => clearInterval(timer);
  }, [smokePercentage]);

  useEffect(() => {
    if (!sloganDisplaying) return;
    const timer = setInterval(() => {
      if (currentSlogan === slogan.length) {
        clearInterval(timer);
        return;
      }
      setCurrentSlogan((prev) => prev + 1);
    }, 50);

    return () => clearInterval(timer);
  }, [currentSlogan, sloganDisplaying]);

  useEffect(() => {
    if (smokePercentage === 100) {
      const ident = setTimeout(() => {
        setSloganDisplaying(true);
      }, 200);
      return () => {
        clearTimeout(ident);
      };
    }
  }, [smokePercentage]);
  return (
    <div className="flex flex-col md:min-h-screen md:pt-0 pt-12 items-center justify-center">
      <img className="w-[95%] max-w-[60rem] select-none" src={mainLogo} alt="" />
      <div className="relative w-[90%] max-w-[60rem] h-4">
        {!sloganDisplaying && (
          <div
            style={{
              width: `${smokePercentage}%`,
              background:
                "linear-gradient(90deg, rgba(62,62,62,1) 0%, rgba(62,62,62,1) 71%, rgba(255,114,46,1) 87%, rgba(255,0,0,1) 100%)",
            }}
            className="h-full rounded-l-lg relative flex items-center"
          >
            <div className="absolute text-white left-[calc(100%-.5rem)]">
              <BsRocketFill className="w-8 h-8 rotate-90 left-full" />
            </div>
          </div>
        )}
        <h1
          className={`w-full tr ${
            sloganDisplaying ? "opacity-100" : "opacity-0 absolute"
          } font-sofia transition-opacity text-center text-white font-light text-2xl`}
        >
          {slogan.slice(0, currentSlogan ? currentSlogan - 1 : 0)}
        </h1>
      </div>
    </div>
  );
};

export default Home;
