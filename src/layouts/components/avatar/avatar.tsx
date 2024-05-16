import styled, { css } from 'styled-components';

const Avatar = styled.div(
    ({ theme: { lightColors } }) => css`
        display: flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${lightColors.background.main};
    `
);

export { Avatar };
