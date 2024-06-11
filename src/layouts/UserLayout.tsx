import { FC, PropsWithChildren, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Container } from '../layouts/components';
import { Avatar } from '../layouts/components/avatar';

import { Header, LayoutContainer } from './components';
import { Gender, IUser } from '../shared/types/user';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ANALYZES, MED_CARD_ROUTS } from '../shared/routes';

import { ANALYZE_MODAL_TYPE } from '../app/entities/analyze';
import { useModalController } from '../shared/modal';
import { setUserAuth } from '../app/entities/auth/model/reducer';
import { setUser } from '../app/entities/user/model/reducer';

export const MOCK_USER: IUser = {
    name: 'Иванов Иван Иванович',
    gender: Gender.male,
    email: 'ivanov@mail.com',
};

const MenuNavigation = styled.nav`
    display: flex;
    gap: 20px;
    margin-left: 20px;
`;

const MenuNavigationItem = styled(Link)`
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
`;

const UserLayout: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useDispatch();
    const user = MOCK_USER;

    const { onModalOpen } = useModalController();

    const handleLogOut = useCallback(() => {
        // Отключает авторизацию пользователя
        dispatch(setUserAuth(false));
        // Сбрасывает информацию о пользователе
        dispatch(setUser(null));
    }, [dispatch]);

    return (
        <LayoutContainer>
            <Header>
                <MenuNavigation>
                    <MenuNavigationItem to={MED_CARD_ROUTS.MAIN}>
                        мед.карта
                    </MenuNavigationItem>
                </MenuNavigation>
                <MenuNavigation>
                    <MenuNavigationItem to={ANALYZES.MAIN}>
                        анализы
                    </MenuNavigationItem>
                </MenuNavigation>
                <Button
                    size="s"
                    ml="20px"
                    onClick={() => onModalOpen(ANALYZE_MODAL_TYPE)}>
                    {' '}
                    + Добавить анализы
                </Button>
                <Container
                    as="button"
                    alignItems="center"
                    gap={10}
                    ml="auto"
                    onClick={handleLogOut}>
                    {user!.name ?? user!.email}
                    <Avatar />
                </Container>
            </Header>
            {children}
        </LayoutContainer>
    );
};

export { UserLayout };
