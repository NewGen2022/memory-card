import PropTypes from 'prop-types';
import Card from './Card';
import kungFuPanda from '../assets/characters/kung-fu-panda.webp';
import taiLung from '../assets/characters/tailung.webp';
import shifu from '../assets/characters/shifu.webp';
import oogway from '../assets/characters/oogway.webp';

const Easy = ({ handleClick, isFlipped }) => {
    return (
        <div id="easy-level">
            <Card imgSrc={kungFuPanda} cardText="Po" handleClick={handleClick} isFlipped={isFlipped} />
            <Card imgSrc={taiLung} cardText="tai Lung" handleClick={handleClick} isFlipped={isFlipped} />
            <Card imgSrc={shifu} cardText="Shifu" handleClick={handleClick} isFlipped={isFlipped} />
            <Card imgSrc={oogway} cardText="Oogway" handleClick={handleClick} isFlipped={isFlipped} />
            <Card imgSrc={oogway} cardText="Oogway" handleClick={handleClick} isFlipped={isFlipped} />
        </div>
    );
};

Easy.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isFlipped: PropTypes.bool.isRequired,
};

export default Easy;
