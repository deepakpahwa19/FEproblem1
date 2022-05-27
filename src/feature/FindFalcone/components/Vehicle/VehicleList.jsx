import React, { useCallback, useContext, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { FindFalconeContext } from '../../FindFalconeFeature';
import { getJourneyNameWithIndex } from '../../constants/constants';
import { getJourneyVehicleAction } from '../../state/actions/actions';
import { RequiredElement, RadioButton } from '../../../../components';

export const VehicleList = ({ name, journeyIndex }) => {
    const { planet, vehicle } = useSelector(state => state.journey[getJourneyNameWithIndex(journeyIndex)]) || {};
    const dispatch = useDispatch();

    const [remainingVehicles, setRemainingVehicles] = useState([]);
    const isSelected = useRef(false);

    const { listOfVehicle = [], updateVehicles, isValid } = useContext(FindFalconeContext);

    const onClickVehicleHandler = useCallback(
        event => {
            const vehicleName = event.target.value;
            const prevVehicleName = vehicle?.name;
            for (let currentVehicle of listOfVehicle) {
                if (currentVehicle.name === vehicleName) {
                    dispatch(getJourneyVehicleAction(currentVehicle, journeyIndex));
                    break;
                }
            }
            isSelected.current = true;
            updateVehicles(prevVehicleName, vehicleName);
        },
        [listOfVehicle, updateVehicles, dispatch, vehicle, journeyIndex]
    );

    useEffect(() => {
        const list = [];
        let newSelectedVehicle = {};
        for (let currentVehicle of listOfVehicle) {
            if (vehicle && vehicle.name === currentVehicle.name) {
                if (currentVehicle.total_no < vehicle.total_no) list.push({ ...vehicle });
                else if (currentVehicle.total_no === vehicle.total_no) {
                    newSelectedVehicle = { ...vehicle, total_no: vehicle.total_no + 1 };
                    list.push(newSelectedVehicle);
                }
            } else {
                list.push({ ...currentVehicle });
            }
        }
        // isSelected ref is used to prevent the continuous update on redux after every render.
        if (isSelected.current && newSelectedVehicle.name) {
            isSelected.current = false;
            // Updating vehicleObject with new value of total_no in redux
            dispatch(getJourneyVehicleAction(newSelectedVehicle, journeyIndex));
        }
        setRemainingVehicles(list);
    }, [listOfVehicle, vehicle, dispatch, journeyIndex]);

    // Not showing Vehicle List if no destination is selected
    if (!planet?.name) {
        return <></>;
    }

    return (
        <>
            {!isValid && !vehicle?.name && <RequiredElement />}
            {remainingVehicles.map((currentVehicle, index) => (
                <RadioButton
                    name={name}
                    value={currentVehicle.name}
                    key={`${name}-${currentVehicle.name}`}
                    isChecked={(vehicle && vehicle.name === currentVehicle.name) || false}
                    isDisabled={currentVehicle.max_distance < planet.distance || currentVehicle.total_no <= 0}
                    onChangeHandler={onClickVehicleHandler}
                    label={`${currentVehicle.name} (${currentVehicle.total_no})`}
                />
            ))}
        </>
    );
};

VehicleList.propTypes = {
    name: PropTypes.string.isRequired,
    journeyIndex: PropTypes.number.isRequired
};
