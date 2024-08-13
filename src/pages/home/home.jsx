import React from 'react';
import styles from './home.module.css';

function Home() {
    return (
        <div className={`container align-items-center d-flex border min-vh-100`}>
            <div className={styles.typingContainer}>
                <h1 className='text-xl'>GARRETT WILLOUGHBY.</h1>
                <p>a short description of myself</p>
            </div>
        </div>
    );
}

export default Home;