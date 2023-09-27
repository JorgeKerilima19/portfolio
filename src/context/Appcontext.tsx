import { createContext } from "react";

interface AppContext {
  windowSize: number;
}

const AppContext = createContext<AppContext>({} as AppContext);

export default AppContext;
