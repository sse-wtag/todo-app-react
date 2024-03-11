import "@components/ui/icons/_iconBase.scss";
import PropTypes from "prop-types";

function PencilIcon({ className, ...rest }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-testid="svg-icon-pencil"
            className={className}
            {...rest}
        >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
        </svg>
    );
}

PencilIcon.defaultProps = {
    className: "icon-base",
};

PencilIcon.propTypes = {
    className: PropTypes.string,
    strokeWidth: PropTypes.number,
};

export default PencilIcon;
