import React from 'react';
import styled from 'styled-components';
import Dropdown from '../UI/Dropdown';
import { RadioButton } from '../UI/RadioButton';

export const DestinationCard = React.memo(({ index, vehicles }) => {
    return (
        <CardContainer>
            <h4>Destination {index}</h4>
            <Dropdown destinationIndex={1} options={[1, 2, 3, 4]} />
            {vehicles.map((vehicle, index) => (
                <RadioButton name={'key'} key={index} value={vehicle} />
            ))}
        </CardContainer>
    );
});

const CardContainer = styled.div`
    height: 6rem;
    width: 5rem;
    min-width: 100px;
    padding: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;
