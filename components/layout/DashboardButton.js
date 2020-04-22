import React from 'react';
import styles from '../../styles/layout/dashboard_button.module.scss';

const DashboardButton = (props) => {
    const style = () => {
        const classStyle = props.style;
        switch (classStyle) {
            case 'large':
                return styles.large
                break;
             
            case 'alternative':
                return styles.alternative;
                break;
              
            default:
                return styles.small;
        }
    }

	return (
		<button onClick={props.onClick} className={style()}>
			{props.children}
		</button>
	);
};

export default DashboardButton;
