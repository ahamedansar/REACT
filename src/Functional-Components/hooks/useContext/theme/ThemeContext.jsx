import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMODE] = useState(false);

    const toggleTheme = () => setDarkMODE(!darkMode);
    return(
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
           <div 
           style={{
           background: darkMode ? "black" : "white",
           color: darkMode? "white" : "black",
           minHeight: '100vh',
           padding:'1rem'
           }}
           >
            {children}
            </div> 
        </ThemeContext.Provider>
    )
}
