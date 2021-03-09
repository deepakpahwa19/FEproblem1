import styled from 'styled-components';

// export const FlexContainer = ({ flexDirection, ...children }) => {
//     return <Container>{children}</Container>;
// };

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: center;
    flex-wrap: wrap;
    /* align-items: flex-start; */
    /* align-content: flex-end; */
    margin: auto;
`;
