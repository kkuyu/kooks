export const useNetwork = onChange => {
	const [status, setStatus] = useState(navigator.onLine);
	const handleChagne = () => {
		if (typeof onChange === "function") {
			onChange(navigator.onLine);
		}
		setStatus(navigator.onLine);
	};
	useEffect(() => {
		window.addEventListener("online", handleChagne);
		window.addEventListener("offline", handleChagne);
		return () => {
			window.removeEventListener("online", handleChagne);
			window.removeEventListener("offline", handleChagne);
		};
	}, []);
	return status;
};
