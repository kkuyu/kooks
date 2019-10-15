export const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = event => {
		const { value } = event.target;
		setValue(value);
	};
	return { value, onChange };
};
