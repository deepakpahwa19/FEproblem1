import React from 'react';
import PropTypes from 'prop-types';
import { RequiredElement } from '../../views';
import { StyledSelect } from './DropDown.styled';

export const DropDownView = ({ name = '', value = 'Select', options = [], onChangeHandler = () => {}, isValid }) => {
    return (
        <>
            {isValid && <RequiredElement />}
            <StyledSelect name={name} value={value} onChange={onChangeHandler}>
                <option value='Select'>Select</option>
                {options.filter(Boolean).map((optionValue, index) => (
                    <option value={optionValue} key={`${name}-${index}`}>
                        {optionValue}
                    </option>
                ))}
            </StyledSelect>
        </>
    );
};

DropDownView.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    onChangeHandler: PropTypes.func,
    isValid: PropTypes.bool
};
