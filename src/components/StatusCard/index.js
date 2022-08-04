import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import PropTypes from "prop-types";

import { apiCall } from "../../assets/apiCall";
import Status from "../Status/Status";
import { TIME_INTERVAL } from "../../utils/constants";

import styles from "./StatusCard.module.css";


const StatusCard = ({title, url}) => {
	const [info, setInfo] = useState({});

	async function fetchData() {
		const info = await apiCall(url);
		setInfo(info);
	}

	useEffect(()=>{
		fetchData();
		setInterval(
			fetchData
			, TIME_INTERVAL);
	}, [url]);

	const convertTime = (timestamp) => {
		const date = new Date(timestamp);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		const formattedTime = `${hours}:${date.getMinutes() < 10 ? `0${minutes}` : minutes}:${date.getSeconds() < 10 ? `0${seconds}` : seconds}`;
		return formattedTime;
	};

	return(
		<Card className={styles.card}>
			<CardContent>
				<h1 className={styles.title}>{title}</h1>
				<Status success={info.success} message={info.message}/>
				{info.success ? (
					<div className={styles.textContainer}>
						<h3 className={styles.hostname}>{info.hostname}</h3>
						<h3 className={styles.time}>{convertTime(info.time)}</h3> 
					</div>
				) : (
					<div className={styles.textContainer}>
						<h3 className={styles.outage}>OUTAGE</h3>
						<h3 className={styles.error}>403</h3> 
						<h3 className={styles.error}>Forbidden</h3> 
					</div>
				)}
                
			</CardContent>
		</Card>
	);
};

StatusCard.propTypes = {
	title: PropTypes.string
};

StatusCard.propTypes = {
	url: PropTypes.string
};

export default StatusCard;