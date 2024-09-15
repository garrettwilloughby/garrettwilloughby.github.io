import React from 'react';
import styles from './home.module.css';
import FadeInSection from '../../components/fade/fade-in';
import Resume from '../../components/resume button/fancy-resume-button';


function Home() {
    return (
        <FadeInSection>
        <div className={`container align-items-center d-flex min-vh-100 w-100`}>
            <div className={styles.typingContainer}>
            <h1 class="fs-sm-1 fs-md-2 fs-lg-1 text-wrap">GARRETT WILLOUGHBY</h1>
                <p>Welcome to my portfolio!</p>
                {/* make this the tpying part instead. */}
            </div>
        </div>
        </FadeInSection>
    );
}

export default Home;