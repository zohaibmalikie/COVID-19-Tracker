import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchData } from './api'
import { useEffect, useState } from 'react';
import cronaImage from './assets/img/image.png'

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('global')

  useEffect( async() => {
   const getData = await fetchData();
   setData(getData);
  }, [])


    //   Getting value of selected country start
    
    const getSelectValue = async(e) =>{
      const getData = await fetchData(e.target.value);
      setCountry(e.target.value)
      
      setData(getData);
    }
    //   Getting value of selected country end

  return (
    <div className={styles.container}>
      <div>
        <img src={cronaImage} alt='Crona Image' className={styles.image}/>
      </div>
      <Cards data = {data}/>
      <CountryPicker changeFunction={getSelectValue}/>
      <Chart data = {data} updatedCountry={country}/>

    </div>
  );
}

export default App;
