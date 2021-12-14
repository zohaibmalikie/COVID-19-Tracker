import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchData } from './api'
import { useEffect, useState } from 'react';

function App() {


  const [data, setData] = useState({})
  // const [dynamic, setDynamic] = useState({})

  useEffect( async() => {
   const getData = await fetchData();
   setData(getData);
  }, [])


    //   Getting value of selected country start
    const getSelectValue = async(e) =>{
      const getData = await fetchData(e.target.value);
      setData(getData);
    }
    //   Getting value of selected country end
 

  return (
    <div className={styles.container}>
      <Cards data = {data}/>
      <CountryPicker changeFunction={getSelectValue}/>
      <Chart/>

    </div>
  );
}

export default App;
