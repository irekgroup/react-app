import { PropsWithChildren, FC } from 'react';
import { lightTheme } from './theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalFiles';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StyledThemeProvider theme={lightTheme}>
            <GlobalStyles />
            {children}
        </StyledThemeProvider>
    );
};

export { ThemeProvider };
