import React from 'react';
import { Container } from './styles';


interface ISelectInputProps {
    months: {
        value: string | number;
        label: string | number;
    } [],
}
const SelectInput: React.FC <ISelectInputProps> = ( { months }) => {
    return (
        <Container>
            <select>
                {   
                   months.map(month =>(
                     <option value={month.value}>{month.label}</option>

                   ))
                    
                }
            </select>
        </Container>
    );
}

export default SelectInput;