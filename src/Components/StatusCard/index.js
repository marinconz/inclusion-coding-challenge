import React, { useEffect, useState } from "react";
import { Card, CardContent } from '@mui/material';

import { apiCall } from "../../assets/apiCall";
import Status from "../Status/Status"

import styles from './StatusCard.module.css'


const StatusCard = ({title, url}) => {
    const [info, setInfo] = useState({})
    useEffect(()=>{
        setInterval(
            async function fetchData() {
                const info = await apiCall(url).then((response)=>response)
                setInfo(info)
            }
            ,15000) //THIS IS THE TIME INTERVAL IN MILLISECONDS
    }, [url])

    const convertTime = (timestamp) => {
        let date = new Date(timestamp);
        let hours = date.getHours()
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();

        let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
        return formattedTime
    }
    return(
        <Card className={styles.card}>
            <CardContent>
                <h1 className={styles.title}>{title}</h1>
                <Status success={info.success} message={info.message}/>
                {info.success ? (
                <>
                    <h3 className={styles.hostname}>{info.hostname}</h3>
                    <h3 className={styles.time}>{convertTime(info.time)}</h3> 
                </>
                ) : (
                    <>
                        <h3 className={styles.outage}>OUTAGE</h3>
                        <h3 className={styles.error}>403</h3> 
                        <h3 className={styles.error}>Forbidden</h3> 
                    </>
                )}
                
            </CardContent>
        </Card>
    )
}

export default StatusCard