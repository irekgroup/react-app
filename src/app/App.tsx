import { FC } from 'react';

import { Providers } from './providers';
import CheckUserAuth from './userCheck/CheckUserAuth';

const App: FC = () => {
    return (
        <Providers>
            <CheckUserAuth />
        </Providers>
    );
};
export { App };
