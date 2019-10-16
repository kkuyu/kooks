export const useInput = (initialValue, ...validator) => {
	const [value, setValue] = useState(initialValue);
	const [isError, setIsError] = useState(false);

	const onChange = event => {
		const { value } = event.target;

		const validatorArray = validator.length
			? validator.filter(validator => typeof validator === "function")
			: null;
		const validatorResult = validatorArray.map(validator =>
			validator(value),
		);

		setIsError(validatorResult.includes(false));
		setValue(value);
	};

	return { value, onChange, isError };
};
