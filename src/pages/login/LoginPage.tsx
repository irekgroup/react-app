import { FC } from 'react';

import { Input, Button, Form, Page, Tittle } from '../../shared/components';

const LoginPage: FC = () => {
    return (
        <Page>
            <Form>
                <Tittle>Авторизация</Tittle>
                <Form>
                    <Input label={'Логин'} tittle="Логин" />
                    <Input label={'Пароль'} type={'password'} />
                    <Button type="submit">Войти</Button>
                </Form>
            </Form>
        </Page>
    );
};

export { LoginPage };
