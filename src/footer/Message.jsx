import PropTypes from 'prop-types';

const Message = ({ text, side, className }) => {
    return (
        <div className={`popup-msg ${side} ${className}`}>
            <span>{ text }</span>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    side: PropTypes.string,
    className: PropTypes.string.isRequired,
};

export default Message;