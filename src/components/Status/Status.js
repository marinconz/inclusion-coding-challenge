import React from "react";
import PropTypes from "prop-types";

import styles from "./Status.module.css";

const Status = ({success, message}) =>{
	return(
		<div className={success ? styles.healthyStatus : styles.errorStatus}>
			{success ? message : "Error"}
		</div>
	);
};

Status.propTypes = {
	success: PropTypes.string
};

Status.propTypes = {
	message: PropTypes.string
};
export default Status;