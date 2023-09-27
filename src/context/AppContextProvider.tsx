import { useEffect, useState } from "react";
import AppContext from "./Appcontext";

export const AppContextProvider = ({ children }: any) => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  //get window Size

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ windowSize }}>{children}</AppContext.Provider>
  );
};
