import { FC, PropsWithChildren, useState } from 'react';
import { AuthContext, AuthUpdaterContext } from '../../entities/auth';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isAuth, setAuth] = useState(true);
    return (
        <AuthContext.Provider value={isAuth}>
            <AuthUpdaterContext.Provider value={setAuth}>
                {children}
            </AuthUpdaterContext.Provider>
        </AuthContext.Provider>
    );
};

export { AuthProvider };
