import React from 'react';
import styles from './home.module.css';
import FadeInSection from '../../components/fade/fade-in';


function Home() {
    return (
        <FadeInSection>
        <div className={`container align-items-center d-flex border min-vh-100`}>
            <div className={styles.typingContainer}>
            <h1 class="fs-sm-1 fs-md-2 fs-lg-1 text-wrap">GARRETT WILLOUGHBY.</h1>
                <p>tbd</p>
            </div>
        </div>
        </FadeInSection>
    );
}

export default Home;