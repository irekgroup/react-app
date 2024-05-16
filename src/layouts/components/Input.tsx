import { FC } from 'react';
import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const StyledInput = styled.input.attrs(({ type = 'text' }) => ({
    type,
}))(
    ({ theme: { lightColors, borderRadius, fontSize }, disabled }) => css`
        height: 35px;
        width: 100%;
        padding: 0 10px;
        margin-bottom: 10px;
        border-radius: ${borderRadius.xxs};
        color: ${lightColors.text.primary};
        font-weight: 400;
        font-size: ${fontSize.l};
        border: 1px solid ${lightColors.text.primary};

        ${disabled &&
        css`
            color: ${lightColors.text.disabled};
            border-color: ${lightColors.text.disabled};
            background: ${lightColors.background.disabled};
        `}
    `
);

const StyledLabel = styled.span<{ disabled?: boolean }>(
    ({ theme: { fontSize, lightColors }, disabled }) => css`
        display: block;
        font-size: ${fontSize.m};
        font-weight: 400;
        color: ${lightColors.text.secondary};

        ${disabled &&
        css`
            color: ${lightColors.text.disabled};
        `}
    `
);

const Container = styled.div<SpaceProps>`
    display: flex;
    flex-direction: column;

    ${space};
`;

type TProps = {
    value: string;
    label: string;
    disabled?: boolean;
    type?: string;
    onChange: (value: string) => void;
};

const Input: FC<TProps & SpaceProps> = ({
    value,
    label,
    disabled = false,
    type = 'text',
    onChange,
    ...other
}) => {
    return (
        <Container {...other}>
            <StyledLabel disabled={disabled}>{label}</StyledLabel>
            <StyledInput
                value={value}
                disabled={disabled}
                type={type}
                onChange={(e) => onChange(e?.target?.value || '')}
            />
        </Container>
    );
};

export { Input };
