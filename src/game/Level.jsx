import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Card from './Card';
import GameOver from './GameOver';
import kungFuPanda from '../assets/characters/kung-fu-panda.webp';
import taiLung from '../assets/characters/tailung.webp';
import shifu from '../assets/characters/shifu.webp';
import oogway from '../assets/characters/oogway.webp';
import tigress from '../assets/characters/tigress.webp';
import monkey from '../assets/characters/monkey.webp';
import mantis from '../assets/characters/mantis.webp';
import chameleon from '../assets/characters/chameleon.webp';
import elephant from '../assets/characters/elephant.webp';
import pandaOuch from '../assets/characters/panda-ouch.webp';
import pandaSilly from '../assets/characters/panda-silly.webp';
import zhen from '../assets/characters/zhen.webp';

const Level = ({ 
    handleClick, 
    isFlipped, 
    level, 
    score, 
    setScore, 
    setBestScore, 
    setLevel,
    handleRestart
}) => {
    const levels = {
        easy: [
            { imgSrc: kungFuPanda, cardText: 'Po' },
            { imgSrc: taiLung, cardText: 'Tai Lung' },
            { imgSrc: shifu, cardText: 'Shifu' },
            { imgSrc: oogway, cardText: 'Oogway' },
            { imgSrc: tigress, cardText: 'Tigress' },
            { imgSrc: monkey, cardText: 'Monkey' },
        ],
        medium: [
            { imgSrc: kungFuPanda, cardText: 'Po' },
            { imgSrc: taiLung, cardText: 'Tai Lung' },
            { imgSrc: shifu, cardText: 'Shifu' },
            { imgSrc: oogway, cardText: 'Oogway' },
            { imgSrc: tigress, cardText: 'Tigress' },
            { imgSrc: monkey, cardText: 'Monkey' },
            { imgSrc: mantis, cardText: 'Mantis' },
            { imgSrc: chameleon, cardText: 'Chameleon' },
            { imgSrc: elephant, cardText: 'Master Elephant' },
            { imgSrc: pandaOuch, cardText: 'Panda Ouch' },
        ],
        hard: [
            { imgSrc: kungFuPanda, cardText: 'Po' },
            { imgSrc: taiLung, cardText: 'Tai Lung' },
            { imgSrc: shifu, cardText: 'Shifu' },
            { imgSrc: oogway, cardText: 'Oogway' },
            { imgSrc: tigress, cardText: 'Tigress' },
            { imgSrc: monkey, cardText: 'Monkey' },
            { imgSrc: mantis, cardText: 'Mantis' },
            { imgSrc: chameleon, cardText: 'Chameleon' },
            { imgSrc: elephant, cardText: 'Master Elephant' },
            { imgSrc: pandaOuch, cardText: 'Panda Ouch' },
            { imgSrc: pandaSilly, cardText: 'Silly Panda' },
            { imgSrc: zhen, cardText: 'Zhen' },
        ]
    };

    const [randomCards, setRandomCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(true);
    const [hidden, setHidden] = useState(true);

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    const getRandomCards = (level) => {
        const numCards = (level === 'easy' ? 3 : level === 'medium' ? 4 : 5);
        const shuffledCards = shuffleArray(levels[level]);
        return shuffledCards.slice(0, numCards);
    };
    
    useEffect(() => {
        setTimeout(() => {
            setRandomCards(getRandomCards(level));
            setHidden(false);
        }, 200);
    }, [level]);

    useEffect(() => {
        if (score === 3 && level === 'easy') {
            setLevel('medium');
            setClickedCards([]);
            setRandomCards([]);
        } else if (score === 8 && level === 'medium') {
            setLevel('hard');
            setClickedCards([]);
            setRandomCards([]);
        } else if (score === 15 && level === 'hard') {
            setGameOver(true);
            setBestScore(15);
        }
    }, [score]);

    const handleCardClick = (cardText) => {
        if (clickedCards.includes(cardText)) {
            setBestScore(prevState => prevState < score ? score : prevState);
            setScore(0);
            setGameOver(true);
            setWin(false);
        } else {
            setClickedCards([...clickedCards, cardText]);
            setScore(prevState => prevState + 1);
            handleClick();
            setTimeout(() => {
                setRandomCards(getRandomCards(level));
            }, 200);
        }
    };

    const cardComponents = randomCards.map((card, index) => (
        <Card
            key={index}
            imgSrc={card.imgSrc}
            cardText={card.cardText}
            handleClick={() => handleCardClick(card.cardText)}
            isFlipped={isFlipped}
        />
    ));

    return (
        <div id="level" className={hidden ? 'hidden' : ''}>
            {cardComponents}
            {gameOver && <GameOver image={win ? shifu : pandaOuch} win={win} handleRestart={handleRestart} />}
            {gameOver && <div id="overlay"></div>}
        </div>
    );
};

Level.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    level: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    setScore: PropTypes.func.isRequired,
    setBestScore: PropTypes.func.isRequired,
    setLevel: PropTypes.func.isRequired,
    handleRestart: PropTypes.func.isRequired,
};

export default Level;