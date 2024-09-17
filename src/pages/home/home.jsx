import React from 'react';
import styles from './home.module.css';
import FadeInSection from '../../components/fade/fade-in';
import TypingEffectComponent from '../../components/typing-component/typing';


function Home() {
    return (
        <FadeInSection>
            <div className={`container align-items-center d-flex min-vh-100 w-100`}>
                <div className={styles.typingContainer}>
                    <h1 className={`${styles.largeText} text-wrap`}>GARRETT WILLOUGHBY</h1>
                    <p className={`px-5 ${styles.typingContainer}`}>< TypingEffectComponent /></p>                
                </div>
            </div>
        </FadeInSection>
    );
}

export default Home;