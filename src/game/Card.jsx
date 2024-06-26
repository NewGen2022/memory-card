import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ imgSrc, cardText, handleClick, isFlipped }) => {
    return (
        <div className={`card ${isFlipped ? 'flip' : ''}`} onClick={handleClick} >
            <div className="front">
                <img src={imgSrc} alt="card" />
                <span>{cardText}</span>
            </div>
            <div className="back">
                {/* No content for the back side, just a background */}
            </div>
        </div>
    );
};

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    isFlipped: PropTypes.bool.isRequired,
};

export default Card;
