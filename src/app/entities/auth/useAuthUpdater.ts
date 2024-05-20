import { useContext } from 'react';
import { AuthUpdaterContext } from './auth-context';
import { AuthUpdaterType } from './types';

const useAuthUpdater = (): AuthUpdaterType => {
    const authUpdaterValue = useContext(AuthUpdaterContext);

    if (!authUpdaterValue) {
        throw new Error('AuthUpdaterContext не подключен');
    }
    return authUpdaterValue;
};

export { useAuthUpdater };
