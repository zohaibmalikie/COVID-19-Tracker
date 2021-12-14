import React, { useEffect, useState }  from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Charts = () => {
    // Fetch Data start
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const fetchApi = async() => {
            setDailyData(await fetchDailyData())
        }
        fetchApi()
    },[])
    // Fetch Data end
    

    const lineChart = (
        dailyData.length !== 0 ?
            (<Line
                    data={{
                        labels: dailyData.map(({date})=> new Date(date).toLocaleDateString()),
                        datasets:[
                            {
                                data: dailyData.map(({confirmed}) => confirmed),
                                label:"Infected",
                                borderColor: "#3333ff",
                                fill: true,

                            },
                            {
                                data: dailyData.map(({deaths}) => deaths),
                                label:"Deaths",
                                borderColor: "red",
                                backgroundColor: "rgba(255,0,0,0.5)",
                                fill: true,

                            },
                        ]
                    }} 
            />): null
    );
    return (
        <div className={styles.container}>
            {lineChart}  
        </div>
    )
}

export default Charts
