import { ElementType } from 'react';
import styled, { css, StyleFunction } from 'styled-components';
import { SpaceProps, space, width, WidthProps } from 'styled-system';

export enum EButtonVariant {
    FILLED = 'filled',
    OUTLINE = 'outline',
}

type SizeType = 'xs' | 's' | 'm' | 'l' | 'square';

interface IButtonProps {
    as?: ElementType;
    variant?: EButtonVariant;
    size?: SizeType;
}

const variantFn: StyleFunction<IButtonProps> = ({
    theme: { lightColors },
    variant = 'filled',
}) => {
    if (variant === 'outline') {
        return css`
            background: ${lightColors.white};
            color: ${lightColors.primary.main};
            border: 2px solid ${lightColors.primary.main};

            &:hover {
                color: ${lightColors.primary.dark};
                border-color: ${lightColors.primary.dark};
            }

            &:disabled {
                cursor: default;
                color: ${lightColors.primary.disabled};
                border-color: ${lightColors.primary.disabled};
            }
        `;
    }

    return css`
        background: ${lightColors.primary.main};
        color: ${lightColors.white};

        &:hover {
            background: ${lightColors.primary.dark};
        }

        &:disabled {
            cursor: default;
            color: ${lightColors.text.disabled};
            background: ${lightColors.primary.disabled};
        }
    `;
};

const sizeFn: StyleFunction<IButtonProps> = ({
    size = 'm',
    theme: { fontSize, borderRadius },
}) => {
    if (size === 'square') {
        return css`
            height: 30px;
            width: 30px;
            font-size: ${fontSize.s};
            border-radius: ${borderRadius.xxs};
        `;
    }

    if (size === 's') {
        return css`
            height: 30px;
            padding: 5px 10px;
            font-size: ${fontSize.s};
            border-radius: ${borderRadius.s};
        `;
    }

    return css`
        height: 40px;
        padding: 10px 20px;
        font-size: ${fontSize.l};
        border-radius: ${borderRadius.m};
    `;
};

const Button = styled.button<IButtonProps & SpaceProps & WidthProps>(
    ({ theme: { fontSize, borderRadius } }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        cursor: pointer;
        transition:
            background 100ms ease-in-out,
            border-color 100ms ease-in-out,
            color 100ms ease-in-out;

        ${variantFn};
        ${space};
        ${width};
        ${sizeFn};
    `
);

export { Button };
