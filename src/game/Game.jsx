import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Game.css';
import '../styles/Level.css';
import Info from './Info';
import Header from './Header';
import Level from './Level';

const Game = ({ setShowMain }) => {
    const [closeInfo, setCloseInfo] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [level, setLevel] = useState('easy');
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => {
        return parseInt(localStorage.getItem('bestScore')) || 0;
    });

    const handleRestart = () => {
        setShowMain(false);
        localStorage.setItem('bestScore', bestScore);
        setBestScore(0);
    };
    
    const handleClick = () => {
        setIsFlipped(prevState => !prevState);

        setTimeout(() => {
            setIsFlipped(false);
        }, 1000);
    };

    return (
        <>
            <Header setShowMain={setShowMain} setCloseInfo={setCloseInfo} />

            <div id="main-game">
                {!closeInfo && 
                    <>
                        <Info setCloseInfo={setCloseInfo} />
                        <div id="overlay"></div>    
                    </>
                }

                <div className='level-difficulty'>Level: <span className={level}>{level}</span></div>
                <div className="score">Score: {score}</div>
                <div className="score">Best Score: {bestScore}</div>

                <Level 
                    handleClick={handleClick} 
                    isFlipped={isFlipped} 
                    level={level}
                    score={score}
                    setScore={setScore}
                    setBestScore={setBestScore}
                    setLevel={setLevel}
                    handleRestart={handleRestart}
                />
            </div>
        </>
    );
};

Game.propTypes = {
    setShowMain: PropTypes.func.isRequired,
};

export default Game;
