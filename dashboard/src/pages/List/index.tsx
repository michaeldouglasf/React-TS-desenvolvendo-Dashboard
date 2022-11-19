import { Container } from "./styles";
import ContentHeader from '../../components/ContentHeader/index';
import SelectInput from '../../components/SelectInput/index';

const List: React.FC = () => {

  const options = [
    { value: 'Maria', label:'Maria'},
    { value: 'Ana', label:'Ana'},
    {value: 'Nastia', label:'Nastia'},
  ]
  return (
    <Container>
        <ContentHeader title="Saidas" lineColor="#E44C4E">
          <SelectInput options={options}/>
        </ContentHeader>
    </Container>
  );
}

export default List;
