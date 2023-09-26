import PropTypes from "prop-types";
import "./IconButton.scss";

function IconButton({ type = "button", className = "icon-btn", children, ...rest }) {
    return (
        <button type={type} className={className} {...rest}>
            {children}
        </button>
    );
}

IconButton.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default IconButton;
