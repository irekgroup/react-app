import { FC } from 'react';

import { Input, Button, Form, Tittle } from '../../layouts/components';

const LoginPage: FC = () => {
    return (
        <Form>
            <Form>
                <Tittle>Авторизация</Tittle>
                <Input label={'Логин'} tittle="Логин" />
                <Input label={'Пароль'} type={'password'} />
                <Button type="submit">Войти</Button>
            </Form>
        </Form>
    );
};

export { LoginPage };
