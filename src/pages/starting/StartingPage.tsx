import { FC } from 'react';
import { useIsAuth } from '../../app/entities/auth/model/selectors';

const StartingPage: FC = () => {
    const isUserAuth = useIsAuth();
    return (
        <div>{`Пользователь авторизовано: ${isUserAuth ? 'Да' : 'Нет'}`}</div>
    );
};

export default StartingPage;
