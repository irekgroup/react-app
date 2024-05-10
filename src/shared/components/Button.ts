import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: 20px;
    font-weight: 500;
    margin-top: auto;
    background-color: ${(props) => (props.disabled ? 'grey' : 'forestgreen')};
    border: none;
    color: ${(props) => (props.disabled ? '#282c34' : 'white')};
    &:hover {
        background-color: ${(props) => (props.disabled ? 'grey' : 'black')};
    }
`;
export default Button;
