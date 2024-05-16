import { FC } from 'react';
import { useCheckUserAuth } from '../../shared/hooks/userAuth/useCheckUserAuth';

const CheckUserAuth: FC = () => {
    useCheckUserAuth();

    return null;
};

export default CheckUserAuth;
