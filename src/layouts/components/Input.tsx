import styled from 'styled-components';

const StyledInput = styled.input.attrs((props) => ({
    type: props.type,
}))`
    height: 35px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    color: ${({ disabled }) => (disabled ? 'grey' : '#282c34')};
    border: 1px solid ${({ disabled }) => (disabled ? 'lightgrey' : '#282c34')};
    background: ${({ disabled }) => (disabled ? 'whitesmoke' : '#white')};
`;

const StyledLabel = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: #282c34;
    margin-bottom: 1px;
`;

const Container = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #282c34;
`;

const Input = ({ value, label, disabled, type }: any) => {
    return (
        <Container>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput value={value} disabled={disabled} type={type} />
        </Container>
    );
};

export { Input };
