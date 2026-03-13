import { createContext } from "react";

interface AppContext {
  windowSize: number;
  showNavbar: boolean;
}

const AppContext = createContext<AppContext>({} as AppContext);

export default AppContext;
