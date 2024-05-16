import styled, { css, StyleFunction } from 'styled-components';

export enum EButtonVariant {
    FILLED = 'filled',
    OUTLINE = 'outline',
}

interface IButtonProps {
    variant?: EButtonVariant;
}

const variantFn: StyleFunction<IButtonProps> = ({
    theme: { lightColors },
    variant = 'filled',
}) => {
    if (variant === 'outline') {
        return css`
            background: ${lightColors.white};
            color: ${lightColors.primary.main};
            border: 1px solid ${lightColors.primary.main};

            &:hover {
                color: ${lightColors.primary.dark};
                border-color: ${lightColors.primary.main};
            }

            &:disabled {
                cursor: none;
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
            cursor: none;
            background: ${lightColors.primary.disabled};
        }
    `;
};

const Button = styled.button<IButtonProps>(
    ({ theme: { fontSize, borderRadius } }) => css`
        height: 40px;
        border-radius: ${borderRadius.m};
        font-weight: 500;
        font-size: ${fontSize.m};
        cursor: pointer;
        transition:
            background 100ms ease-in-out,
            border-color 100ms ease-in-out,
            color 100ms ease-in-out;

        ${variantFn};
    `
);

export { Button };
