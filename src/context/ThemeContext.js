import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles";
import { darkTheme, lightTheme } from "../theme/Theme";


const defaultValue = {
    mode:true
};

const ThemeContext = createContext(defaultValue);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw Error("useThemeContext must be used inside ThemeContext");
    return context;
};

export const ThemeContextProvider = ({children})=>{
    const [themeMode,setThemeMode] = useState(defaultValue.mode)

    const changeTheme = useCallback(()=>{
        setThemeMode(!themeMode)
    },[themeMode])

    const value = useMemo(() => ({
        themeMode,
        changeTheme    
    }),[themeMode]);

    return <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
}