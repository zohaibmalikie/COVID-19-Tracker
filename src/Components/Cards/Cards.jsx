import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CardSingle from './CardSingle';


const Cards = ({data : {confirmed, deaths, lastUpdate, recovered} }) => {
    if(!confirmed){
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify-content="center">
                <CardSingle type="Infected" description="active cases of" numbers={confirmed.value} date={new Date(lastUpdate).toDateString()}/>
                <CardSingle type="Recovered" description="recoveries from" numbers={recovered.value} date={new Date(lastUpdate).toDateString()}/>
                <CardSingle type="Deaths" description="deaths of" numbers={deaths.value} date={new Date(lastUpdate).toDateString()}/>
            </Grid>
        </div>
    )
}

export default Cards
