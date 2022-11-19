import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader/index';
import SelectInput from '../../components/SelectInput/index';
import HistoryFinanceCard from "../../components/HistoryFinanceCard/HistoryFinanceCard";

const List: React.FC = () => {

  const months = [
    { value: '10', label:'October'},
    { value: '11', label:'November'},
    { value: '12', label:'December'},
  ]

  const years = [
    { value: '2022', label:'2022'},
    { value: '2021', label:'2021'},
    { value: '2020', label:'2020'},
  ]
  return (
    <Container>
        <ContentHeader title="Saidas" lineColor="#E44C4E">
          <SelectInput months={months}/>
          <SelectInput months={years}/>
        </ContentHeader>

        <Filters>
          <button 
            type="button"
            className='tag-filter tag-filter-recurrent'
          >
              Recorrentes
          </button>

          <button 
            type="button"
            className='tag-filter tag-filter-eventual'
          >
              Eventuais
          </button>

        </Filters>
        <Content>
          <HistoryFinanceCard
           tagColor='#E44C4E'
           title="Conta de Luz"
           subTitle="27-07-22"
           amount="R$130"
           />
           
        </Content>
    </Container>
  );
}

export default List;
