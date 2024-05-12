import styled from 'styled-components';

const colorTextPrimary = '#282c34';
/** ПРОБЛЕМА! если в Form добавить стиль border: 3px solid ${colorTextPrimary};
 будет двойное наложение рамки в форме. Как пофиксить? **/
const Form = styled.div`
    /* border: 1px solid ${colorTextPrimary}; */
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export { Form };
