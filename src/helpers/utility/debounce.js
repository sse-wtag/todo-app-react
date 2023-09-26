export const debounce = (fn, delayInMilliSeconds = 500) => {
    let timeoutId = null;

    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delayInMilliSeconds);
    };
};
