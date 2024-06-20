import '../styles/Footer.css';
import soundIcon from '../../src/assets/sound.png';
import noSoundIcon from '../../src/assets/no-sound.png';
import questionIcon from '../../src/assets/question.png';
import closeIcon from '../../src/assets/cross.png';
import Message from './Message';

import { useState, useEffect } from 'react';

const Footer = () => {
    const [isSound, setIsSound] = useState(false);
    const [isHelp, setIsHelp] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowMessage(true);
            const timer2 = setTimeout(() => setShowMessage(false), 3000);
            return () => clearTimeout(timer2);
        }, 1000);

        return () => clearTimeout(timer1);
    }, []);

    const handleSound = () => {
        setIsSound(prevState => !prevState);
    };

    const handleHelp= () => {
        setIsHelp(prevState => !prevState);
    };

    return (
        <div id="footer">
            {showMessage && (
                <Message text="Turn the sound up" side="left" />
            )}

            <button id="sound" onClick={ handleSound }>
                <img src={ isSound ? soundIcon : noSoundIcon }/>
            </button>

            {isSound && (
                <video autoPlay loop id="video">
                    <source src='./kai-theme-music.mp4' type="video/mp4"></source>
                </video>
            )}

            <button id="help" onClick={ handleHelp }>
                <img src={ isHelp ? questionIcon : closeIcon }/>
            </button>
        </div>
    );
};

export default Footer;