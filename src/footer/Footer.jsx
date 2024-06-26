import '../styles/Footer.css';
import soundIcon from '../../src/assets/sound.png';
import noSoundIcon from '../../src/assets/no-sound.png';
import questionIcon from '../../src/assets/question.png';
import closeIcon from '../../src/assets/cross.png';
import Message from './Message';

import { useState, useEffect } from 'react';

const Footer = () => {
    const [isSound, setIsSound] = useState(false);
    const [isShowHelp, setIsShowHelp] = useState(false);
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

    const handleShowHelp= () => {
        setIsShowHelp(prevState => !prevState);
    };

    return (
        <div id="footer">
            {isSound && (
                <video autoPlay loop id="video">
                    <source src='./kai-theme-music.mp4' type="video/mp4"></source>
                </video>
            )}

            {showMessage && (
                <Message text="Turn the sound up" side="left" className="sound-msg" />
            )}

            <button id="sound" onClick={ handleSound }>
                <img src={ isSound ? soundIcon : noSoundIcon } alt="sound on/off" />
            </button>

            {isShowHelp && (
                <div id="help-msgs">
                    <Message text="Don't click on the same card twice!" className="help-msg"/>
                    <Message text="Click on 'KUNG FU PANDA' logo to go to start screen" className="help-msg"/>
                </div>
            )}

            <button id="help" onClick={ handleShowHelp }>
                <img src={ !isShowHelp ? questionIcon : closeIcon } alt="question mark" />
            </button>
        </div>
    );
};

export default Footer;