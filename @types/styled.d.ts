import 'styled-components';

declare module 'styled-components' {
    export interface LightTheme {
        bgImage: string;
        fontFamily: {
            main: string;
            secondary: string;
            large: string;
        };
        fontSize: {
            xs: string;
            s: string;
            m: string;
            l: string;
            xl: string;
        };
        lightColors: {
            white: string;
            background: {
                main: string;
                dark: string;
                disabled: string;
            };

            primary: {
                main: string;
                dark: string;
                light: string;
                disabled: string;
            };

            success: {
                main: string;
                dark: string;
                light: string;
            };

            warning: {
                main: string;
                dark: string;
                light: string;
            };

            error: {
                main: string;
                dark: string;
                light: string;
                disabled: string;
            };

            text: {
                primary: string;
                secondary: string;
                disabled: string;
            };
        };
        boxShadow: {
            xs: string;
            xs_inner: string;
            s: string;
            m: string;
        };
        borderRadius: {
            xxs: string;
            xs: string;
            s: string;
            m: string;
        };
    }
    export interface DarkTheme {
        bgImage: string;
        fontFamily: {
            main: string;
            secondary: string;
            large: string;
        };
        fontSize: {
            xs: string;
            s: string;
            m: string;
            l: string;
            xl: string;
        };
        darkColors: {
            background: {
                main: string;
                dark: string;
                disabled: string;
            };

            primary: {
                main: string;
                dark: string;
                light: string;
                disabled: string;
            };

            success: {
                main: string;
                dark: string;
                light: string;
            };

            warning: {
                main: string;
                dark: string;
                light: string;
            };

            error: {
                main: string;
                dark: string;
                light: string;
                disabled: string;
            };

            text: {
                primary: string;
                secondary: string;
                disabled: string;
            };
        };
        boxShadow: {
            xs: string;
            xs_inner: string;
            s: string;
            m: string;
        };
        borderRadius: {
            xxs: string;
            xs: string;
            s: string;
            m: string;
        };
    }
}
