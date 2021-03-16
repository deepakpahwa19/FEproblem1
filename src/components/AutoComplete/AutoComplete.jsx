import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { AutoCompleteItem } from './AutoCompleteItem';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import styled from 'styled-components';

export const AutoComplete = ({ id, data, onSelect }) => {
    const [isVisible, setVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [cursor, setCursor] = useState(-1);

    const searchContainer = useRef(null);
    const searchResultRef = useRef(null);

    const handleClickOutside = useCallback(event => {
        if (searchContainer.current && !searchContainer.current.contains(event.target)) {
            hideSuggestion();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    const scrollIntoView = position => {
        searchResultRef.current.parentNode.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    };

    const suggestions = useMemo(() => {
        if (!search) return data;

        setCursor(-1);
        scrollIntoView(0);

        return data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }, [data, search]);

    useEffect(() => {
        if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
            return () => {};
        }

        let listItems = Array.from(searchResultRef.current.children);
        listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
    }, [cursor, suggestions]);

    const showSuggestion = () => setVisible(true);

    const hideSuggestion = () => setVisible(false);

    const keyboardNavigation = e => {
        if (e.key === 'ArrowDown') {
            isVisible ? setCursor(c => (c < suggestions.length - 1 ? c + 1 : 0)) : showSuggestion();
        } else if (e.key === 'ArrowUp') {
            setCursor(c => (c > 0 ? c - 1 : suggestions.length - 1));
        } else if (e.key === 'Escape') {
            hideSuggestion();
        } else if (e.key === 'Enter' && cursor >= 0) {
            setSearch(suggestions[cursor].name);
            hideSuggestion();
            onSelect(suggestions[cursor]);
        } else {
            showSuggestion();
        }
    };

    return (
        <AutoCompleteStyle ref={searchContainer}>
            <SearchBarStyle onClick={showSuggestion}>
                <SearchInputStyle
                    type='text'
                    name='search'
                    autoComplete='off'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => keyboardNavigation(e)}
                />
                {isVisible ? <UpArrowIcon /> : <DownArrowIcon />}
            </SearchBarStyle>

            <SearchResultStyle isVisible={isVisible}>
                <ListGroupStyle ref={searchResultRef}>
                    {suggestions.map((item, index) => (
                        <RowStyle key={item.name}>
                            <AutoCompleteItem
                                onSelectItem={() => {
                                    hideSuggestion();
                                    setSearch(item.name);
                                    onSelect(item);
                                }}
                                isHighlighted={cursor === index}
                                {...item}
                            />
                            {index < suggestions.length - 1 && <SeparatorStyle />}
                        </RowStyle>
                    ))}
                </ListGroupStyle>
            </SearchResultStyle>
        </AutoCompleteStyle>
    );
};

const AutoCompleteStyle = styled.div`
    width: 20%;
    height: 100%;
    margin: 200px 300px;
`;

const SearchBarStyle = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    background: transparent;
    padding: 0.5rem;
    &:focus {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

const SearchInputStyle = styled.input`
    border: none;
    font-size: 1.5rem;
    height: 100%;
    &:focus {
        outline: none;
    }
`;

const SearchResultStyle = styled.div`
    width: 100%;
    max-height: 25rem;
    overflow-y: auto;
    padding-inline: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.28);
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

const ListGroupStyle = styled.ul``;

const RowStyle = styled.div``;

const SeparatorStyle = styled.div`
    border-bottom: 1px dotted lightGrey;
`;

const DownArrowIcon = styled(FaSortDown)`
    margin-top: -0.2rem;
`;
const UpArrowIcon = styled(FaSortUp)`
    margin-top: 0.5rem;
`;
