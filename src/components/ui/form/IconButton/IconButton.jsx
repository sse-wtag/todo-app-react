import PropTypes from "prop-types";
import "./IconButton.scss";

function IconButton({ type, className, icon, ...rest }) {
    return (
        <button type={type} className={className} {...rest}>
            {icon}
        </button>
    );
}

IconButton.defaultProps = {
    type: "button",
    className: "icon-btn",
};

IconButton.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.element.isRequired,
};

export default IconButton;
