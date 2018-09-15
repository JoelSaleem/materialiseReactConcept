import React from 'react';

const LandingInfo = ({ infoText }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<p style={styles.textStyle}>{infoText}</p>
		</div>
	);
};

const styles = {
	textStyle: {
		fontSize: 32
	}
};

export default LandingInfo;
