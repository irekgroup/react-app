import { FC } from 'react';

import { LoginPage } from '../pages/login/LoginPage';

import { GuestLayout } from '../layouts';
import { Providers } from './providers';

function AppInner() {
    return (
        <GuestLayout>
            <LoginPage />
        </GuestLayout>
    );
}

const App: FC = () => {
    return (
        <Providers>
            <AppInner />
        </Providers>
    );
};
export { App };
