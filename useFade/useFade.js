export const useFade = (
	duration = 1,
	timing = "ease-in-out",
	delay = 0,
	type = "fadeIn"
) => {
	if (
		typeof duration !== "number" ||
		typeof delay !== "number" ||
		typeof timing !== "string" ||
		!(type === "fadeIn" || type === "fadeOut")
	) {
		return;
	}

	const element = useRef();
	useEffect(() => {
		if (element.current) {
			const { current } = element;
			current.style.transition = `opacity ${duration}s ${timing} ${delay}s`;
			current.style.opacity = ( type === "fadeIn" ? 1 : 0 );
		}
	}, []);
	return { ref: element, style: { opacity: ( type === "fadeIn" ? 0 : 1 ) } };
};
