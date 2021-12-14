import axios from "axios";

const url = "https://covid19.mathdro.id/api";


export const fetchData = async (country) =>{
    let changeAbleUrl = url;

    if(country){
        changeAbleUrl = `${url}/countries/${country}`;
    }
    if(country == 'global'){
        changeAbleUrl = `${url}`;
    }

    try {
        const {data} = await axios.get(changeAbleUrl);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return modifiedData;

    } catch (error) {
        console.log(error.message);
    }
}


export const fetchDailyData = async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData)=>(
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }
        )) 
        return modifiedData;
    } catch (error) {
        console.log(error.message);
    }
}


export const countriesFun = async () =>{
    try {
        const {data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country)=> country.name);


    } catch (error) {
        console.log(error.message);
    }
}


