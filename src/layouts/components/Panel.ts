import styled, { css } from 'styled-components';
import { height, width, HeightProps, WidthProps } from 'styled-system';

const Panel = styled.div<HeightProps & WidthProps>(
    ({ theme: { borderRadius, lightColors } }) => css`
        display: flex;
        flex-direction: column;
        padding: 40px 40px;
        border-radius: ${borderRadius.m};
        background: ${lightColors.white};

        ${height};
        ${width};
    `
);

export { Panel };
