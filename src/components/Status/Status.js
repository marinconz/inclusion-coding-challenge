import React from "react";
import styles from './Status.module.css'

const Status = ({success, message}) =>{
    return(
        <div className={success ? styles.healthyStatus : styles.errorStatus}>
            {success ? message : 'Error'}
        </div>
    )
}

export default Status