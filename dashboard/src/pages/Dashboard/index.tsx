import React from "react";
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader/index';
import SelectInput from '../../components/SelectInput/index';


const Dashboard:React.FC = () => {

  const options = [
    { value: 'Maria', label:'Maria'},
    { value: 'Ana', label:'Ana'},
    {value: 'Nastia', label:'Nastia'},
 ]
  return (
    <Container>
        <ContentHeader title="Dashboard" lineColor="#f7931b">
          <SelectInput options={options}/>
        </ContentHeader>
    </Container>
  );
}

export default Dashboard;
