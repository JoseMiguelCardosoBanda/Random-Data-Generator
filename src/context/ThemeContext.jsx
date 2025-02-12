import { createContext, useContext, useState } from "react";

const ThContext = createContext();

export default function ThemeContextProv({ children }) {
  const [theme, setTheme] = useState(false);
  return (
    <ThContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThContext.Provider>
  );
}

export const ThemeHand = () => {
  return useContext(ThContext);
};
