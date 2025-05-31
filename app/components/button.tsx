import styles from './button.module.css'
import React from 'react';

interface ButtonProps {
    circleColor: string;
    textColor: string;
    text: string;
}

function Button(props: ButtonProps) {
    return(
        <button className={styles.button}>
            <span className={styles.circle} style={{backgroundColor: props.circleColor}}></span>
            <span className={styles.text} style={{ color: props.textColor }}>
                {props.text}
            </span>
        </button>
    )
}

export default Button;
