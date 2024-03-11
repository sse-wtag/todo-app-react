import PropTypes from "prop-types";
import "@components/ui/icons/_iconBase.scss";

function SpinnerIcon({ className = "icon-base", ...rest }) {
    return (
        <svg
            className={className}
            viewBox="0 0 138 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="svg-icon-spinner"
            {...rest}
        >
            <g clipPath="url(#clip0_8_383)">
                <path
                    d="M25.6987 44C32.3764 32.4338 43.1586 24.1605 56.059 20.7036C68.9595 17.2472 82.4338 19.021 94 25.6988C102.19 30.4272 108.837 37.3303 113.224 45.6617C117.489 53.7622 119.458 62.8672 118.917 71.9925L109.558 71.4381C109.998 64.0197 108.397 56.6166 104.929 50.0294C101.368 43.2661 95.9677 37.6601 89.3125 33.8177C69.913 22.6174 45.018 29.288 33.8177 48.6875C22.6174 68.087 29.288 92.982 48.6875 104.182C55.3427 108.025 62.8975 109.898 70.5352 109.601C77.9742 109.311 85.1858 106.995 91.3906 102.906L96.55 110.733C88.9176 115.764 80.048 118.612 70.9004 118.969C61.492 119.335 52.1898 117.03 44 112.301C32.4338 105.624 24.1604 94.8413 20.7035 81.941C17.2471 69.0405 19.021 55.5662 25.6987 44Z"
                    fill="#7A8DFD"
                />
            </g>
            <defs>
                <clipPath id="clip0_8_383">
                    <rect width="100" height="100" fill="white" transform="translate(137.301 50.6987) rotate(120)" />
                </clipPath>
            </defs>
        </svg>
    );
}

SpinnerIcon.propTypes = {
    className: PropTypes.string,
};

export default SpinnerIcon;
