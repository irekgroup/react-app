import { FC, PropsWithChildren } from 'react';
import styled, { StyleFunction, css } from 'styled-components';
import { Container } from '../Container';
import { Button } from '../Button';

type Sizes = 's' | 'm' | 'l';

const OverLay = styled.div(
    () => css`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(8px);
    `
);

const HeaderContainer = styled.div(
    ({ theme: { fontSize, lightColors } }) => css`
        font-weight: 600;
        font-size: ${fontSize.l};
    `
);

interface IModalContainerProps {
    size?: Sizes;
}

const sizeFn: StyleFunction<IModalContainerProps> = ({
    size,
    theme: { borderRadius },
}) => {
    if (size === 's')
        return css`
            width: 300px;
            border-radius: ${borderRadius.s};
            padding: 10px;
            min-height: 200px;
        `;
    return css`
        width: 400px;
        border-radius: ${borderRadius.m};
        padding: 20px;
        min-height: 200px;
    `;
};

const ModalContainer = styled.div<IModalContainerProps>(
    ({ theme: { borderRadius, lightColors } }) => css`
        display: flex;
        flex-direction: column;
        background-color: ${lightColors.white};

        ${sizeFn}
    `
);

interface IModalProps {
    size?: Sizes;
    title: string;
    onClose: VoidFunction;
}

const Modal: FC<PropsWithChildren & IModalProps> = ({
    size = 'm',
    title,
    children,
    onClose,
}) => {
    return (
        <OverLay>
            <ModalContainer size={size}>
                <HeaderContainer>
                    <Container
                        marginBottom="20px"
                        justifyContent="space-between"
                        alignItems="center">
                        <HeaderContainer>{title}</HeaderContainer>
                        <Button size="square" onClick={onClose}>
                            x
                        </Button>
                    </Container>
                    {children}
                </HeaderContainer>
            </ModalContainer>
        </OverLay>
    );
};

export { Modal };
