import { useCallback, useState } from 'react';

export const useDestinations = (destinations = []) => {
    const [listOfDestination, setListOfDestination] = useState(() =>
        destinations.map(destination => destination && { ...destination })
    );
    const [selectedDestinations, setSelectedDestinations] = useState(() => new Array(destinations.length).fill(null));

    /**
     * @description: To keep track of the selected destination in each destination dropdown displaying in each card
     * @summary: There will be two arrays of same length to keep track of selected destinations and remaining destinations
     * available for other dropdowns
     * @param: newValue = new selected destination
     * @param: prevValue = previous selected destination
     */
    const updateDestinations = useCallback(
        (prevValue, newValue) => {
            // creating new array to prevent mutating the state
            let newDestinationList = new Array(listOfDestination.length).fill(null),
                newSelectedDestinationList = new Array(listOfDestination.length).fill(null);

            for (let index in listOfDestination) {
                // if prevValue matches with the selectedDestinations[index] then put prevValue object into newDestinationList
                // else pass the selectedDestinations[index] value to newSelectedDestinationList[index]
                if (prevValue && selectedDestinations[index] && prevValue === selectedDestinations[index].name) {
                    newSelectedDestinationList[index] = null;
                    newDestinationList[index] = selectedDestinations[index];
                } else {
                    newSelectedDestinationList[index] = selectedDestinations[index];
                }
                // if newValue matches with the listOfDestination[index] then put newValue object into newSelectedDestinationList
                // else pass the listOfDestination[index] value to newDestinationList[index]
                if (listOfDestination[index] && listOfDestination[index].name === newValue) {
                    newSelectedDestinationList[index] = listOfDestination[index];
                    newDestinationList[index] = null;
                } else {
                    // if newDestinationList[index] does not have value then take the value from listOfDestination[index]
                    // to prevent overriding of the value done in the if condition for prevValue match
                    newDestinationList[index] = newDestinationList[index]
                        ? newDestinationList[index]
                        : listOfDestination[index];
                }
            }

            setListOfDestination(newDestinationList);
            setSelectedDestinations(newSelectedDestinationList);
        },
        [listOfDestination, selectedDestinations]
    );

    return [listOfDestination, updateDestinations];
};
