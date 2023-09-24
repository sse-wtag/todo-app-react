import PropTypes from "prop-types";
import "./Button.scss";

function Button({ children, className, type, ...rest }) {
    return (
        <button type={type} className={`btn ${className}`} {...rest}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: "button",
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
