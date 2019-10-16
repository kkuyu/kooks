export const useTabs = (initialTab, allTabs) => {
	if (!allTabs || !Array.isArray(allTabs)) {
		return false;
	}

	const [currentIndex, setCurrentIndex] = useState(initialTab);
	const tabButtonRef = useRef(null);

	const activeIndex = (index, isFocus=false) => {
		const tabButtonArray = tabButtonRef.current.querySelectorAll("button");
		setCurrentIndex(index);
		if (isFocus) {
			tabButtonArray[index].focus();
		}
	};

	const onClick = (index) => {
		activeIndex(index, false)
	}

	const onKeyDown = (event, index) => {
		if (event.keyCode === 36) {
			// home key
			activeIndex(0, true);
		} else if (event.keyCode === 35) {
			// end key
			activeIndex(allTabs.length - 1, true);
		} else if (event.keyCode === 37) {
			// left key
			index !== 0
				? activeIndex(index - 1, true)
				: activeIndex(allTabs.length - 1, true);
		} else if (event.keyCode === 39) {
			// right key
			index !== allTabs.length - 1
				? activeIndex(index + 1, true)
				: activeIndex(0, true);
		}
	};

	return { tabButtonRef, currentIndex, onClick, onKeyDown };
};
