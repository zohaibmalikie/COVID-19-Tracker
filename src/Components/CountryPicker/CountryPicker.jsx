import React, { useEffect, useState  }  from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import {countriesFun} from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({changeFunction}) => {

  // Fetch Data start
  const [countries, setCountries] = useState([])
  useEffect(() => {
      const fetchApi = async() => {
        setCountries(await countriesFun())
      }
      fetchApi()
    
    },[])
    // Fetch Data end


    return (
      <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={changeFunction}>
              <option value="global">Global</option>
              {
               countries.map((country,i)=>(
                   <option key={i} value={country}>{country}</option> ))   
              }
          </NativeSelect>
      </FormControl>
    )
}

export default CountryPicker
