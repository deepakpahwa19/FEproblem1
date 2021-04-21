import { useState, useCallback } from 'react';

export const useVehicles = (vehicles = []) => {
    const [listOfVehicle, setListOfVehicle] = useState(() => vehicles.map(vehicle => vehicle && { ...vehicle }));

    const updateVehicles = useCallback(
        (prevValue, nextValue) => {
            let newVehicleList = new Array(listOfVehicle.length).fill(null);
            for (let index in listOfVehicle) {
                newVehicleList[index] = { ...listOfVehicle[index] };
                if (listOfVehicle[index].name === nextValue) {
                    newVehicleList[index].total_no--;
                } else if (listOfVehicle[index].name === prevValue) {
                    newVehicleList[index].total_no++;
                }
            }
            setListOfVehicle(newVehicleList);
        },
        [listOfVehicle]
    );

    return [listOfVehicle, updateVehicles];
};
