import { FaSortDown, FaSortUp } from 'react-icons/fa';
import styled from 'styled-components';

export const AutoCompleteStyle = styled.div`
    width: 100%;
`;

export const SearchBarStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    padding: 0.5rem;
    &:focus {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

export const SearchInputStyle = styled.input`
    border: none;
    font-size: ${props => props.theme.fontSizes.sm};
    padding-left: ${props => props.theme.margin.xs};
    height: 100%;
    width: 90%;
    &:focus {
        outline: none;
    }
`;

export const SearchResultStyle = styled.div`
    width: 100%;
    max-height: 25rem;
    z-index: 1300;
    background-color: ${props => props.theme.colors.powderWhite};
    overflow-y: auto;
    padding-inline: ${props => props.theme.margin.xs};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.28);
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const ListGroupStyle = styled.ul``;

export const RowStyle = styled.div``;

export const SeparatorStyle = styled.div`
    border-bottom: 1px dotted lightGrey;
`;

export const DownArrowIcon = styled(FaSortDown)`
    margin-top: -0.2rem;
`;
export const UpArrowIcon = styled(FaSortUp)`
    margin-top: 0.5rem;
`;
