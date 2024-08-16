import React from 'react';
import styles from './home.module.css';

function Home() {
    return (
        <div className={`container align-items-center d-flex border min-vh-100`}>
            <div className={styles.typingContainer}>
            <h1 class="fs-sm-1 fs-md-2 fs-lg-1">GARRETT WILLOUGHBY.</h1>
                <p>a short description of myself</p>
            </div>
        </div>
    );
}

export default Home;