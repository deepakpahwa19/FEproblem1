import styled from 'styled-components';

// export const FlexContainer = ({ flexDirection, ...children }) => {
//     return <Container>{children}</Container>;
// };

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${({ flexDirection }) => flexDirection || 'space-evenly'};
    align-items: center;
    margin: 60px auto;
`;
