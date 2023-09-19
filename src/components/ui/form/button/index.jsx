import PropTypes from "prop-types";
import "./style.scss";

function Button({ children, className, type, ...rest }) {
    return (
        <button type={type} className={className} {...rest}>
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
