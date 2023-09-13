import PropTypes from "prop-types";
import "./style.scss";

function Button({ children, className, type = "button", ...rest }) {
    return (
        <button type={type} className={`btn ${className}`} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired || PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
