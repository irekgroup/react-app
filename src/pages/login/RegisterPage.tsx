import { FC, useCallback, useState } from 'react';
/* import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'; */
import { useNavigate } from 'react-router-dom';

import { Panel, Tittle, Input, Button } from '../../layouts/components';
import { CenteredPage, GuestLayout } from '../../layouts';
import { EButtonVariant } from '../../layouts/components/Button';
/* import localStorageManager from '../../shared/localStorage/localStorageManager'; */

const RegisterPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleRegister = useCallback(async () => {
        try {
            /* const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                login,
                password
            ); */
            /* const user = userCredential.user;
            const userRefreshToken = user.refreshToken;

            localStorageManager.setValue('auth_token', userRefreshToken); */

            navigate('/health/profile');
        } catch (error) {
            console.log(error);
        }
    }, [login, password]);

    return (
        <CenteredPage>
            <Panel>
                <Tittle>Регистрация</Tittle>
                <form>
                    <Input value={login} onChange={setLogin} label={'Логин'} />
                    <Input
                        label={'Пароль'}
                        type={'password'}
                        value={password}
                        onChange={setPassword}
                    />
                    <Input
                        label={'Повторите пароль'}
                        type={'password'}
                        value={password}
                        onChange={setPassword}
                    />
                </form>
                <Button
                    onClick={handleRegister}
                    type="submit"
                    variant={EButtonVariant.FILLED}>
                    Войти
                </Button>
            </Panel>
        </CenteredPage>
    );
};

export default RegisterPage;
