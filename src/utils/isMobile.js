/**
 * Detects if the user is on a mobile device based on the user agent string.
 *
 * Note: In SSR frameworks like Next.js, use this function within `useEffect`
 * to ensure it runs only on the client side, as `navigator` is not available
 * during server-side rendering.
 *
 * - SSR Example:
 *
 *      ```javascript
 *      const [isMobile, setIsMobile] = useState(false);
 *
 *      useEffect(() => {
 *          setIsMobile(isMobileDevice());
 *      }, []);
 *      ```
 *
 * @returns {boolean} True if the device is mobile, false otherwise.
 */

export const isMobileDevice = () => {
	const userAgent = navigator.userAgent;

	// Mobile detection logic
	return /android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent);
};
