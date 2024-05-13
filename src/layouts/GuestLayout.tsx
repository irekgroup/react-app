import { PropsWithChildren, FC } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './components';

const LayoutContainer = styled.div(
    ({ theme: { lightColors, bgImage } }) => css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 500px;
        background: ${lightColors.background.main};
        background-image: url(${bgImage});
        background-repeat: no-repeat;
        background-position: center;
    `
);

const HeaderContainer = styled.header(
    ({ theme: { lightColors } }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 10px 30px;
        background: ${lightColors.white};
        box-sizing: border-box;
    `
);

const UnionContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const StyleLogo = styled.h1(
    ({ theme: { fontSize } }) => css`
        font-size: ${fontSize.xl};
    `
);

const GuestLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutContainer>
            <HeaderContainer>
                <StyleLogo>My health</StyleLogo>
                <UnionContainer>
                    <Button>Регистрация</Button>
                    <Button>Авторизация</Button>
                </UnionContainer>
            </HeaderContainer>
            {children}
        </LayoutContainer>
    );
};

export { GuestLayout };
