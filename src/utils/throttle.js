/**
 * Creates a throttled version of the provided function.
 * The throttled function will only execute at most once every `limit` milliseconds.
 *
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The time in milliseconds to wait before allowing `func` to be called again.
 * @returns {Function} - The throttled version of `func`.
 */
function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function (...args) {
        const context = this;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

export default throttle;