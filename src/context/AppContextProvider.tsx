import { useEffect, useState } from "react";
import AppContext from "./Appcontext";

export const AppContextProvider = ({ children }: any) => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  //get window Size

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    const handleNavbar = () => {
      if (window.innerWidth > 720) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleNavbar);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("resize", handleNavbar);
    };
  }, []);

  return (
    <AppContext.Provider value={{ windowSize, showNavbar }}>
      {children}
    </AppContext.Provider>
  );
};
