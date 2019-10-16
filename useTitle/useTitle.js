const useTitle = initialTitle => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const titleTag = document.querySelector("title");
		titleTag.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};
