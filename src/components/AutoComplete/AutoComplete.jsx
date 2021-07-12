import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { RequiredElement } from '../../views';
import { AutoCompleteItem } from './AutoCompleteItem/AutoCompleteItem';
import { AutoCompleteView } from './AutoComplete.view';

export const AutoComplete = ({ id, options, onSelect, isValid }) => {
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

    const scrollIntoView = useCallback(position => {
        searchResultRef.current.parentNode.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }, []);

    const suggestions = useMemo(() => {
        if (!search) return options;

        setCursor(-1);
        scrollIntoView(0);

        return options.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    }, [options, search, scrollIntoView]);

    useEffect(() => {
        if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
            return () => {};
        }

        let listItems = Array.from(searchResultRef.current.children);
        listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
    }, [cursor, suggestions, scrollIntoView]);

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
            setSearch(suggestions[cursor]);
            hideSuggestion();
            onSelect(suggestions[cursor]);
        } else if (e.key === 'Backspace' || e.key === 'Delete') {
            setSearch('');
            hideSuggestion();
            onSelect('');
        } else {
            showSuggestion();
        }
    };

    const onSelectHandler = item => {
        hideSuggestion();
        setSearch(item);
        onSelect(item);
    };

    return (
        <>
            <AutoCompleteView
                searchContainerRef={searchContainer}
                id={id}
                onClickHandler={showSuggestion}
                inputValue={search}
                isVisible={isVisible}
                onKeyDownHandler={keyboardNavigation}
                onChangeHandler={setSearch}
                searchResultRef={searchResultRef}
                onSelectHandler={onSelectHandler}
                cursor={cursor}
                suggestions={suggestions}
            />
        </>
    );
};

AutoComplete.propTypes = {
    id: PropTypes.string,
    options: PropTypes.array,
    onSelect: PropTypes.func,
    isValid: PropTypes.bool
};
