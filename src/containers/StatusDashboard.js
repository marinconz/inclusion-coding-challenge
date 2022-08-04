import React from "react";
import { Grid } from "@mui/material";

import { apiInfo } from "../assets/apiInfo";
import StatusCard from "../components/StatusCard";
import styles from "./StatusDashboard.module.css";


const StatusDashboard = () => {
	return(
		<div className={styles.dashboard}>
			<div className={styles.dashboardTitle}>Status Dashboard</div>
			<Grid container spacing={{ sm: 2, md: 3, lg:4 }} columns={{ xs: 1, sm: 2, md: 4, lg:6 }}>
				{apiInfo.map(({title, apiURL}) => {
					return(
						<Grid item key={title} xs={6} sm={4} md={2} lg={1}>
							<StatusCard key={title} title={title} url={apiURL}/>
						</Grid>
					);
				})}   
			</Grid>
		</div>
	);
};

export default StatusDashboard;