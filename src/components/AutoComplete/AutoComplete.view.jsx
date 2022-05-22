import React from 'react';
import PropTypes from 'prop-types';

import { RequiredElement } from '../';
import { AutoCompleteItem } from './AutoCompleteItem/AutoCompleteItem';
import {
    DownArrowIcon,
    SearchResultStyle,
    SeparatorStyle,
    UpArrowIcon,
    AutoCompleteStyle,
    ListGroupStyle,
    RowStyle,
    SearchBarStyle,
    SearchInputStyle
} from './AutoComplete.styled';

export const AutoCompleteView = ({
    id,
    onSelect,
    isValid,
    searchContainerRef,
    onClickHandler,
    inputValue,
    isVisible,
    onKeyDownHandler,
    onChangeHandler,
    searchResultRef,
    onSelectHandler,
    cursor,
    suggestions
}) => {
    return (
        <AutoCompleteStyle ref={searchContainerRef} id={id}>
            {isValid && <RequiredElement />}
            <SearchBarStyle onClick={onClickHandler}>
                <SearchInputStyle
                    type='text'
                    name='search'
                    autoComplete='off'
                    value={inputValue}
                    onChange={e => onChangeHandler(e.target.value)}
                    onKeyDown={e => onKeyDownHandler(e)}
                />
                {isVisible ? <UpArrowIcon /> : <DownArrowIcon />}
            </SearchBarStyle>

            <SearchResultStyle isVisible={isVisible}>
                <ListGroupStyle ref={searchResultRef}>
                    {suggestions.map((item, index) => (
                        <RowStyle key={item}>
                            <AutoCompleteItem
                                onSelectItem={() => {
                                    onSelectHandler(item);
                                }}
                                isHighlighted={cursor === index}
                                name={item}
                            />
                            {index < suggestions.length - 1 && <SeparatorStyle />}
                        </RowStyle>
                    ))}
                </ListGroupStyle>
            </SearchResultStyle>
        </AutoCompleteStyle>
    );
};

AutoCompleteView.propTypes = {
    id: PropTypes.string,
    onSelect: PropTypes.func,
    isValid: PropTypes.bool
};
