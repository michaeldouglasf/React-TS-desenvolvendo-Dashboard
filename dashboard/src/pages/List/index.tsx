import React,{useMemo, useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader/index';
import SelectInput from '../../components/SelectInput/index';
import HistoryFinanceCard from "../../components/HistoryFinanceCard/HistoryFinanceCard";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

// interface IRoutesParams {
//   match: {
//     params: {
//       id: string;
//     }
//   }
// }

interface IData {
  id: string;
  description: string;
  amountFormated: string;
  frequency: string;
  dateFormated: string;
  tagColor: string;
}
const List: React.FC  = () => {
  
    const [data, setData] = useState<IData[]>([])

    


    const {id} = useParams()

    const title = useMemo(() => {
        return id === 'entry-balance'?'Entradas': 'Saidas';
    },[id])

    const lineColor = useMemo(() => {
      return id === 'entry-balance'?'#f7931b': '#E44C4E';
    },[id])

   const listData = useMemo(() => {
    return id === 'entry-balance'? gains : expenses;
    },[id])

    useEffect(() => {
     const response = listData.map(item => {
        return {
          id: String(Math.random() * data.length),
          description: item.description,
          amountFormated:item.amount,
          frequency: item.frequency,
          dateFormated: formatDate(item.date) ,
          tagColor: item.frequency === 'recorrente' ? "#4e41f0" : "#e44c4e",
        }
      })
      setData(response)
    },[])

    const months = [
      { value: 1, label: 'Janeiro' },
      { value: 2, label: 'Fevereiro' },
      { value: 3, label: 'Março' },
      { value: 4, label: 'Abril' },
      { value: 5, label: 'Maio' },
      { value: 6, label: 'Junho' },
      { value: 7, label: 'Julho' },
      { value: 8, label: 'Agosto' },
      { value: 9, label: 'Setembro' },
      { value: 10, label: 'Outubro' },
      { value: 11, label: 'Novembro' },
      { value: 12, label: 'Dezembro' },
    ];

    const years = [
      { value: 2022, label: 2022 },
      { value: 2023, label: 2023 },
      { value: 2024, label: 2024 },
      { value: 2025, label: 2025 },
      { value: 2026, label: 2026 },
      { value: 2027, label: 2027 },
      { value: 2028, label: 2028 },
      { value: 2029, label: 2029 },
      { value: 2030, label: 2030 },
      { value: 2031, label: 2031 },
      { value: 2032, label: 2032 },
    ]
  return (
    <Container>
        <ContentHeader title={title} lineColor={lineColor} >
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
         {  
              data.map(item => (
                <HistoryFinanceCard
                key={item.id}
                tagColor={item.tagColor}
                title={item.description}
                subTitle={item.dateFormated}
                amount={item.amountFormated}
              />
             ))
         }
        </Content>
    </Container>
  );
}

export default List;
