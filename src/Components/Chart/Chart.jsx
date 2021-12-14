import React, { useEffect, useState }  from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);




const Charts = ({data, updatedCountry}) => {
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

    const barChart = (
        data.confirmed
        ?(
            <Bar
                data={{
                    labels:['Infected', 'Recovered','Deaths'],
                    datasets: [{
                        label:"People",
                        backgroundColor: ['rgb(80, 80, 252)', 'rgb(111, 248, 111)', 'rgb(250, 83, 83)'],
                        data:[data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true, text: `Current state in ${updatedCountry}`}
                }}

            />
        ): null
    )

    return (
        <div className={styles.container}>
            
            {updatedCountry == 'global' ? lineChart : barChart}  
        </div>
    )
}

export default Charts
