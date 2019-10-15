export const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = event => {
		const { value } = event.target;
		let willUpdate = true;
		if (typeof validator === "function") {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};
