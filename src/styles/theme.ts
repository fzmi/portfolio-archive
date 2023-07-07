import { createContext } from 'react';
import styles from './_variables.scss';

const elements = ["background", "foreground", "navbar", "nifuText", "card", "link"];
const lightTheme: any = {};
const darkTheme: any = {};
elements.forEach(element => {
  lightTheme[element] = styles[element + "Light"];
  darkTheme[element] = styles[element + "Dark"];
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => { },
});
