import { PropsWithChildren, FC } from 'react';
import { ThemeProvider } from './theme';
import RouterProvider from './router/RouterProvider';
import { AuthProvider } from './auth/AuthProvider';
import { ModalProvider } from './modal/ModalProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ModalProvider>
            <AuthProvider>
                <ThemeProvider>
                    <RouterProvider>{children}</RouterProvider>
                </ThemeProvider>
            </AuthProvider>
        </ModalProvider>
    );
};

export { Providers };
