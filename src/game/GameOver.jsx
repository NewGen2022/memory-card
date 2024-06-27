import PropTypes from 'prop-types';

const GameOver = ({ image, win, handleRestart }) => {
    return (
        <div id="game-over">
            <img src={image} />
            <div className={`font ${win ? 'win' : 'lose'}`}>{win ? 'You win' : 'You lose'}</div>
            <div className={`${win ? 'congrats' : 'gg'}`}>{win ? 'CONGRATULATIONS!' : 'Better luck next time!'}</div>
            <button id="restart-game-btn" onClick={handleRestart}>Restart</button>
        </div>
    );
};

GameOver.propTypes = {
    image: PropTypes.string.isRequired,
    win: PropTypes.bool.isRequired,
    handleRestart: PropTypes.func.isRequired,
};


export default GameOver;
