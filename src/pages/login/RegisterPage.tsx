import { FC, useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Panel, Tittle, Input, Button } from '../../layouts/components';
import { CenteredPage, GuestLayout } from '../../layouts';
import { EButtonVariant } from '../../layouts/components/Button';
import { signInEmailAndPassword } from './api/auth.api';
import localStorageManager from '../../shared/localStorage/localStorageManager';

const RegisterPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleRegister = useCallback(async () => {
        try {
            const { refreshToken } = await signInEmailAndPassword({
                email: login,
                password,
            });

            localStorageManager.setValue('auth_token', refreshToken);

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
