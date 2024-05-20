import { useContext } from 'react';
import { AuthContext } from './auth-context';

const useAuth = (): boolean => {
    const authValue = useContext(AuthContext);

    if (authValue === null) {
        throw new Error('AuthContext не подключен');
    }
    return authValue;
};

export { useAuth };
