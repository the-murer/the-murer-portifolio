import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setdarkTheme] = useState(localStorage.getItem("theme") === "dark");
  
  const toggleTheme = () => {
    localStorage.setItem("theme", darkTheme ? "light" : "dark");
    setdarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
