import React from 'react';
import styles from '../../styles/layout/NavbarBtn.module.scss';

const NavbarBtn = (props) => {
    return (
        <button 
            onClick={props.onClick} 
            className={styles.NavbarBtn}>{props.children}
        </button>
    );
}

export default NavbarBtn;
