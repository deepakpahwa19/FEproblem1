import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RequiredElement } from '..';

export const DropDownView = React.memo(
    ({ name = '', value = 'Select', options = [], onChangeHandler = () => {}, isValid }) => {
        return (
            <>
                {isValid && <RequiredElement />}
                <Select name={name} value={value} onChange={onChangeHandler}>
                    <option value='Select'>Select</option>
                    {options.filter(Boolean).map((optionValue, index) => (
                        <option value={optionValue} key={`${name}-${index}`}>
                            {optionValue}
                        </option>
                    ))}
                </Select>
            </>
        );
    }
);

DropDownView.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    onChangeHandler: PropTypes.func,
    isValid: PropTypes.bool
};

const Select = styled.select`
    margin: 10px 0;
    padding: 5px;
`;
