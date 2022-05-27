import styled from 'styled-components';

export const StyledListItem = styled.li`
    cursor: pointer;
    margin: 0.2rem;
    list-style: none;

    background-color: ${({ active, theme }) => (active ? theme.colors.lightGrey : '')};
    border-color: ${({ active, theme }) => (active ? theme.colors.darkerGrey : '')};

    & :hover {
        background-color: ${props => props.theme.colors.lightGrey};
        border-color: ${props => props.theme.colors.darkerGrey};
    }
`;
