import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

const CardSingle = ({type , description, numbers, date}) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{type}</Typography>
                <Typography variant="h5">
                   <CountUp start={0} end={numbers} duration={2.5} separator=','/> 
                </Typography>
                <Typography color="textSecondary">{date}</Typography>
                <Typography variant="body2">Number of {description} COVID-19</Typography>
            </CardContent>
        </Grid>
    )
}

export default CardSingle
