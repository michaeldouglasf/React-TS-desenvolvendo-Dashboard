import React,{ useState, useEffect, useMemo} from "react";
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader/index';
import SelectInput from '../../components/SelectInput/index';
import React from "react";
import Layout from "../../components/Layout";

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import { months } from '../../utils/monthsYear'


const Dashboard:React.FC = () => {

  let expensesGains: any[] = [...expenses, ...gains] 

  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
  const [yearSelected, setYearSelected] = useState<number>( new Date().getFullYear())
  const [frequecyFilterSelected, setFrequecyFilterSelected] = useState(['recorrent','eventual'])

  const options = [
    { value: 'Maria', label:'Maria'},
    { value: 'Ana', label:'Ana'},
    {value: 'Nastia', label:'Nastia'},
 ]

  const years = useMemo(() => {
  
  const uniqueYears: number[] = []

  expensesGains.forEach(item => {
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
 },[])

  const monthsYear = useMemo(() => {
    monthsYear.map((month: any, index: number) => {
      return {
        value: index + 1,
        label: month,
      }
    })      
  },[])

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
function Dashboard() {
  return (
    <Container>
        <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput 
            options={months} 
            onChange={(e)=> handeleMonthSelected(e.target.value)} 
            defaultValue={monthSelected} 
          />
          <SelectInput 
            options={years} 
            onChange={(e)=>handeleYearSelected(e.target.value)} 
            defaultValue={yearSelected}
          />
        </ContentHeader>
    </Container>
  );
}

export default Dashboard;
 