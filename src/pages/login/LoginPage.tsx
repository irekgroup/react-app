import { FC, useCallback, useState } from 'react';
/* import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; */

import { Panel, Tittle, Input, Button } from '../../layouts/components';
import { CenteredPage } from '../../layouts';
import { EButtonVariant } from '../../layouts/components/Button';

import localStorageManager from '../../shared/localStorage/localStorageManager';
import { useDispatch } from 'react-redux';

import { MOCK_USER } from '../../layouts/UserLayout';
import { setUser } from '../../app/entities/user/model/reducer';
import { setUserAuth } from '../../app/entities/auth/model/reducer';

const LoginPage: FC = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogIn = useCallback(async () => {
        dispatch(setUserAuth(true));
        dispatch(setUser(MOCK_USER));

        return;
    }, [login, password, localStorageManager]);

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
                    onClick={handleLogIn}>
                    Войти
                </Button>
            </Panel>
        </CenteredPage>
    );
};
export default LoginPage;
