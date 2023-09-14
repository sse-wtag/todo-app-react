import "@components/ui/icons/_iconBase.scss";
import PropTypes from "prop-types";

function CheckIcon({ className = "icon-base", strokeWidth = 1.5, ...rest }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}

CheckIcon.propTypes = {
    className: PropTypes.string,
    strokeWidth: PropTypes.number,
};

export default CheckIcon;
