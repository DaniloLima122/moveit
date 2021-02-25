import React from 'react';

import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/DaniloLima122.png" alt="Danilo Lima"/>
            <div>
                <strong>Danilo Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}
