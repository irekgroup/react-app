import backgroundBlue from '../../../resources/background-blue.jpg';
import { LightTheme, DarkTheme } from 'styled-components';

const lightColors = {
    white: '#fff',
    background: {
        main: '#587877',
        dark: '#806491',
        disabled: '#9b969d',
    },

    primary: {
        main: '#a77e53',
        dark: '#a17149',
        light: '#e9dfbf',
        disabled: '#a29381',
    },

    success: {
        main: '#00B96B',
        dark: '#038650',
        light: '#D6FAE4',
    },

    warning: {
        main: '#FCC31A',
        dark: '#FFAF00',
        light: '#FFF3BF',
    },

    error: {
        main: '#F63C23',
        dark: '#E82E14',
        light: '#FEDADA',
        disabled: '#FB8D8D',
    },

    text: {
        primary: '#1C1F22',
        secondary: '#494f54',
        disabled: '#868F96',
    },
};

const darkColors = {
    background: {
        main: '#231b28',
        dark: '#587877',
        disabled: '#9b969d',
    },

    primary: {
        main: '#a77e53',
        dark: '#a17149',
        light: '#e9dfbf',
        disabled: '#a29381',
    },

    success: {
        main: '#00B96B',
        dark: '#038650',
        light: '#D6FAE4',
    },

    warning: {
        main: '#FCC31A',
        dark: '#FFAF00',
        light: '#FFF3BF',
    },

    error: {
        main: '#F63C23',
        dark: '#E82E14',
        light: '#FEDADA',
        disabled: '#FB8D8D',
    },

    text: {
        primary: '#1C1F22',
        secondary: '#494f54',
        disabled: '#868F96',
    },
};

const lightTheme: LightTheme = {
    bgImage: backgroundBlue,
    fontFamily: {
        main: "'Advent Pro', sans-serif",
        secondary: "'Press Start 2P', system-ui",
        large: "'Honk', system-ui",
    },
    fontSize: {
        xs: '10px',
        s: '12px',
        m: '14px',
        l: '16px',
        xl: '20px',
    },
    lightColors,
    boxShadow: {
        xs: '1px 1px 4px #413636',
        xs_inner: 'inset 1px 1px 0px #413636',
        s: '8px 4px 11px #413636;',
        m: '1px 1px #806491',
    },
    borderRadius: {
        xxs: '5px',
        xs: '10px',
        s: '15px',
        m: '20px',
    },
};

const darkTheme: DarkTheme = {
    bgImage: backgroundBlue,
    fontFamily: {
        main: "'Advent Pro', sans-serif",
        secondary: "'Press Start 2P', system-ui",
        large: "'Honk', system-ui",
    },
    fontSize: {
        xs: '10px',
        s: '12px',
        m: '14px',
        l: '',
        xl: '',
    },
    darkColors,
    boxShadow: {
        xs: '1px 1px 4px #413636',
        xs_inner: 'inset 1px 1px 0px #413636',
        s: '8px 4px 11px #413636;',
        m: '1px 1px #806491',
    },
    borderRadius: {
        xxs: '5px',
        xs: '10px',
        s: '15px',
        m: '20px',
    },
};

export { lightTheme, darkTheme };
