import PropTypes from "prop-types";
import "./style.scss";

function TextArea({ className, rows, ...rest }) {
    return <textarea className={className || "input-textarea"} rows={rows} {...rest}></textarea>;
}

TextArea.defaultProps = {
    rows: 3,
};

TextArea.propTypes = {
    className: PropTypes.string,
    rows: PropTypes.number,
};

export default TextArea;
