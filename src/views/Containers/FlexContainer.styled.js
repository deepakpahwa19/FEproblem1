import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    flex-wrap: wrap;
    width: auto;
    margin: ${({ margin }) => (margin ? margin : 'auto')};
`;
