import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: center;
    flex-wrap: wrap;
    margin: ${({ margin }) => (margin ? margin : 'auto')};
`;
