import styled from 'styled-components';

const Button = styled.button`
    height: 35px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    border: none;
    background-color: ${(props) => (props.disabled ? 'grey' : 'forestgreen')};
    &:hover {
        background-color: ${({ disabled }) =>
            disabled ? 'gray' : 'rgb(19, 114, 19)'};
    }
`;

export { Button };
