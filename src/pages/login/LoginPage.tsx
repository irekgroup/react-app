import { FC, useCallback, useState } from 'react';
/* import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; */

import { Panel, Tittle, Input, Button } from '../../layouts/components';
import { CenteredPage } from '../../layouts';
import { EButtonVariant } from '../../layouts/components/Button';

import localStorageManager from '../../shared/localStorage/localStorageManager';
import { useDispatch } from 'react-redux';

import { setUser } from '../../app/entities/user/model/reducer';
import { setUserAuth } from '../../app/entities/auth/model/reducer';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchUser, signInEmailAndPassword } from './api/auth.api';
import { STARTING_PAGE_ROUT } from '../../shared/routes';
import { REFRESH_TOKEN_LS_KEY } from '../../app/entities/auth';
import { USER_DATA_LS_KEY } from '../../app/entities/user';

const LoginPage: FC = () => {
    const dispatch = useDispatch();
    const [isSubmitting, setSubmitting] = useState(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogIn = useCallback(async () => {
        try {
            setSubmitting(true);
            const { refreshToken } = await signInEmailAndPassword({
                email: login,
                password,
            });

            const user = await fetchUser({ email: login });

            localStorageManager.setValue(REFRESH_TOKEN_LS_KEY, refreshToken);
            localStorageManager.setValue(USER_DATA_LS_KEY, user);

            dispatch(setUserAuth(true));
            dispatch(setUser(user));

            navigate(location.state?.urlToGoAfter || STARTING_PAGE_ROUT, {
                replace: true,
            });
        } catch (error) {
            console.log(error);
        }
    }, [login, password, localStorageManager]);

    const isFormValid = !!login && !!password;

    return (
        <CenteredPage>
            <Panel>
                <Tittle>Авторизация</Tittle>
                <form>
                    <Input value={login} onChange={setLogin} label={'Логин'} />
                    <Input
                        label={'Пароль'}
                        type={'password'}
                        value={password}
                        onChange={setPassword}
                    />
                </form>
                <Button
                    type="submit"
                    variant={EButtonVariant.FILLED}
                    disabled={!isFormValid || isSubmitting}
                    onClick={handleLogIn}>
                    Войти
                </Button>
            </Panel>
        </CenteredPage>
    );
};
export default LoginPage;
