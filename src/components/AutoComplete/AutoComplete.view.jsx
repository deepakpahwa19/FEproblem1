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
    isValid,
    searchContainerRef,
    onClickSearchBarHandler,
    inputValue,
    isVisible,
    onKeyDownInputHandler,
    onChangeInputHandler,
    searchResultRef,
    onSelectHandler: onClickItemHandler,
    cursor,
    suggestions
}) => {
    return (
        <AutoCompleteStyle ref={searchContainerRef} id={id}>
            {isValid && <RequiredElement />}
            <SearchBarStyle onClick={onClickSearchBarHandler}>
                <SearchInputStyle
                    type='text'
                    name='search'
                    autoComplete='off'
                    value={inputValue}
                    onChange={e => onChangeInputHandler(e.target.value)}
                    onKeyDown={e => onKeyDownInputHandler(e)}
                />
                {isVisible ? <UpArrowIcon /> : <DownArrowIcon />}
            </SearchBarStyle>

            <SearchResultStyle isVisible={isVisible}>
                <ListGroupStyle ref={searchResultRef}>
                    {suggestions.map((item, index) => (
                        <RowStyle key={item}>
                            <AutoCompleteItem
                                onClickItemHandler={() => {
                                    onClickItemHandler(item);
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
    isValid: PropTypes.bool,
    searchContainerRef: PropTypes.object,
    onClickSearchBarHandler: PropTypes.func,
    inputValue: PropTypes.string,
    isVisible: PropTypes.bool,
    onKeyDownInputHandler: PropTypes.func,
    onChangeInputHandler: PropTypes.func,
    searchResultRef: PropTypes.object,
    onClickItemHandler: PropTypes.func,
    cursor: PropTypes.number,
    suggestions: PropTypes.arrayOf(PropTypes.string)
};
