import PropTypes from 'prop-types';
import Card from './Card';
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
import zhen from '../assets/characters/mantis.webp';

const Level = ({ handleClick, isFlipped, level='easy' }) => {
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

    const cards = levels[level];

    const cardComponents = cards.map((card, index) => (
        <Card
            key={index}
            imgSrc={card.imgSrc}
            cardText={card.cardText}
            handleClick={handleClick}
            isFlipped={isFlipped}
        />
    ));

    return (
        <div id="level">
            {cardComponents}
        </div>
    );
};

Level.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    level: PropTypes.string.isRequired,
};

export default Level;