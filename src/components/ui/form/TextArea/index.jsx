import PropTypes from "prop-types";
import "./style.scss";

function TextArea({ className, rows, ...rest }) {
    return <textarea className={className} rows={rows} {...rest}></textarea>;
}

TextArea.defaultProps = {
    className: "input-text",
    rows: 3,
};

TextArea.propTypes = {
    className: PropTypes.string,
    rows: PropTypes.number,
};

export default TextArea;
