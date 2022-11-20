import React from 'react';
import { Container } from './styles';


interface ISelectInputProps {
    months: {
        value: string | number;
        label: string | number;
    } [],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
}
const SelectInput: React.FC <ISelectInputProps> = ( {
     months,
     onChange,
     defaultValue
     }) => {
    return (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue}>
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