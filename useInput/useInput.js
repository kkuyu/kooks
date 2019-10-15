export const useInput = (initialValue, ...validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = event => {
		const { value } = event.target;
		let willUpdate = true;

		const validatorArray = validator.length
			? validator.filter(validator => typeof validator === "function")
			: null;
		const validatorResult = validatorArray.map(validator =>
			validator(value),
		);

		willUpdate = !validatorResult.includes(false);
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};
