import { FC, PropsWithChildren, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Container } from '../layouts/components';
import { Avatar } from '../layouts/components/avatar';
import { EButtonVariant } from '../layouts/components/Button';

import { Header, LayoutContainer } from './components';

const GuestLayout: FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();
    const handleRegister = useCallback(() => {
        navigate('/register');
    }, [navigate]);

    const handleLogin = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    return (
        <LayoutContainer>
            <Header>
                <Container alignItems="center" gap={10} ml="auto">
                    <Button
                        onClick={handleRegister}
                        variant={EButtonVariant.OUTLINE}>
                        Регистрация
                    </Button>
                    <Button onClick={handleLogin}>Авторизоваться</Button>
                    <Avatar />
                </Container>
            </Header>
            {children}
        </LayoutContainer>
    );
};

export { GuestLayout };
