import React from 'react';
import TypingEffect from 'react-typing-effect';
import styles from "./typing.module.css"

const TypingEffectComponent = () => {
    return (
        <TypingEffect
            text={['Welcome to my website!', 'Check out my resume!', 'Send me an email!']}
            speed={100}        // Speed of typing
            eraseSpeed={50}    // Speed of erasing
            typingDelay={1000} // Delay before starting to type
            eraseDelay={2000}  // Delay before starting to erase
            displayTextRenderer={(text, i) => (
                <p className={`${styles.text}`}>{text}</p>
            )}
        />
    );
};

export default TypingEffectComponent;
