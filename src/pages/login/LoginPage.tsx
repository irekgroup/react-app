import { FC, useCallback, useState } from 'react';
/* import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; */
import { useLocation, useNavigate } from 'react-router-dom';
import { Panel, Tittle, Input, Button } from '../../layouts/components';
import { CenteredPage, GuestLayout } from '../../layouts';
import { EButtonVariant } from '../../layouts/components/Button';
import { EAboutAppRoutes } from '../../shared/routes/interfaces/interface';
import localStorageManager from '../../shared/localStorage/localStorageManager';
import { AUTH_TOKEN } from '../../shared/hooks/userAuth/constants';

const loginFake = () => {
    return new Promise((res) =>
        setTimeout(() => {
            res({ auth_token: 'sdfsdf' });
        })
    );
};

const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogIn = useCallback(async () => {
        const creds = await loginFake();

        localStorageManager.setValue(
            AUTH_TOKEN,
            (creds as { auth_token: string }).auth_token
        );
        console.log(location);
        navigate(location.state.goToAfterLogin || '/health/profile');
    }, [login, password, localStorageManager]);

    return (
        <GuestLayout>
            <CenteredPage>
                <Panel>
                    <Tittle>Авторизация</Tittle>
                    <form>
                        <Input
                            value={login}
                            onChange={setLogin}
                            label={'Логин'}
                        />
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
                        onClick={handleLogIn}>
                        Войти
                    </Button>
                </Panel>
            </CenteredPage>
        </GuestLayout>
    );
};
export default LoginPage;
