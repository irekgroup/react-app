import styled, { css, StyleFunction } from 'styled-components';

type ButtonVariant = 'filled' | 'outline';

interface IButtonProps {
    variant?: ButtonVariant;
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
        display: flex;
        align-items: center;
        height: 40px;
        padding: 10px;
        border-radius: ${borderRadius.m};
        font-weight: 500;
        font-size: ${fontSize.m};
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
        transition:
            background 100ms ease-in-out,
            border-color 100ms ease-in-out,
            color 100ms ease-in-out;

        ${variantFn};
    `
);

export { Button };
