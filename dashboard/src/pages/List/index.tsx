import React,{useMemo, useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ContentHeader from '../../components/ContentHeader/index';
import SelectInput from '../../components/SelectInput/index';
import HistoryFinanceCard from "../../components/HistoryFinanceCard/HistoryFinanceCard";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatDate from '../../utils/formatDate';
import {months} from '../../utils/monthsYear'

import { Container,
   Content,
   Filters
 } from './styles';
import { uuid } from 'uuidv4';

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
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = useState<number>( new Date().getFullYear())
    const [frequecyFilterSelected, setFrequecyFilterSelected] = useState(['recorrent','eventual'])


    const {id } = useParams()

  //   const title = useMemo(() => {
  //       return id === 'entry-balance'?'Entradas': 'Saidas';
  //   },[id])

  //   const lineColor = useMemo(() => {
  //     return id === 'entry-balance'?'#f7931b': '#E44C4E';
  //   },[id])

  //  const listData = useMemo(() => {
  //   return id === 'entry-balance'? gains : expenses;
  //   },[id])

    const pageData = useMemo(() => {
      return id === 'entry-balance' ?
      {
        title:'Entradas',
        lineColor: '#f7931b',
        data: gains
      } :
      {
        title:'Saidas',
        lineColor: '#E44C4E',
        data: expenses
      }

    },[id])
    const handleFrequencyClick = (frequency: string) => {
      const alreadySelected = frequecyFilterSelected.findIndex( item => item === frequency);

      if (alreadySelected >= 0) {
        const filtered = frequecyFilterSelected.filter( item => item !== frequency)
        setFrequecyFilterSelected(filtered)
      } else {
        setFrequecyFilterSelected((prev)=> [...prev, frequency] )
      }
    }

    const handeleMonthSelected = (month: string ) => {
      try {
        const parseMonth = Number( month)
        setMonthSelected(parseMonth)
      } catch (error) {
        
        throw new Error ('Invalid month value. Is accept  0 - 24.')
      }
    }

    const handeleYearSelected = (year: string ) => {
      try {
        const parseYear = Number( year)
        setYearSelected(parseYear)
      } catch (error) {
        
        throw new Error ('Invalid year value. Is accept  integer numbers.')
      }
    }

    useEffect(() => {
      const { data } = pageData
      
      const filteredData = data.filter(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      return month === monthSelected && year === yearSelected;
     })

      const formattedData = filteredData.map(item =>{
        return {
          id: uuidv4() ,
          description: item.description,
          amountFormated:item.amount,
          frequency: item.frequency,
          dateFormated: formatDate(item.date) ,
          tagColor: item.frequency === 'recorrente' ? "#4e41f0" : "#e44c4e",
        }
      })
      setData(formattedData)
    },[pageData, monthSelected, yearSelected])

    const years = useMemo(() => {
      const { data } = pageData
      
      const uniqueYears: number[] = []

      data.forEach(item => {
        const date = new Date(item.date)
        const year = date.getFullYear()

        if(!uniqueYears.includes(year))
         uniqueYears.push(year)
      })
      return uniqueYears.map(year =>{
        return {
          value: year,
          label: year,
        }
      })
    },[pageData])

    const monthsOfYear = useMemo(() => {
      months.map((month: any, index: number) => {
        return {
          value: index + 1,
          label: month,
        }
      })      
    },[])
    
  return (
    <Container>
        <ContentHeader title={pageData.title} lineColor={pageData.lineColor} >
          <SelectInput 
            key={id}
            options={months} 
            onChange={(e)=> handeleMonthSelected(e.target.value)} 
            defaultValue={monthSelected} 
          />
          <SelectInput 
            key={id}
            options={years} 
            onChange={(e)=>handeleYearSelected(e.target.value)} 
            defaultValue={yearSelected}
          />
        </ContentHeader>

        <Filters>          
          <button 
            type="button"
            className={`tag-filter tag-filter-recurrent
            ${frequecyFilterSelected.includes('recorente') && 'tag-actived'}`
            }
            onClick={() => handleFrequencyClick('recorente')}
          >
              Recorrentes
          </button>

          <button 
            type="button"
            className={`tag-filter tag-filter-eventual
            ${frequecyFilterSelected.includes('eventual') && 'tag-actived'}`}
            onClick={() => handleFrequencyClick('eventual')}
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
