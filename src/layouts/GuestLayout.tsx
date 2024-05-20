import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Button, Container } from '../layouts/components';
import { Avatar } from '../layouts/components/avatar';
import { EButtonVariant } from '../layouts/components/Button';

import { Header, LayoutContainer } from './components';

const GuestLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutContainer>
            <Header>
                <Container alignItems="center" gap={10} ml="auto">
                    <Button
                        as={Link}
                        to="/register"
                        variant={EButtonVariant.OUTLINE}>
                        Регистрация
                    </Button>
                    <Button as={Link} to="/login">
                        Авторизоваться
                    </Button>
                    <Avatar />
                </Container>
            </Header>
            {children}
        </LayoutContainer>
    );
};

export { GuestLayout };
