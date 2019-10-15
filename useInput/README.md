# Usage

```js
import useInput from "@custom_react_hook/useInput";
const App = () => {
	const maxLength = value => value.length <= 10;
	const characterCheck = value => !value.includes("@");
	const name = useInput("John Doe", maxLength); // One validator
	const nickname = useInput("John", maxLength, characterCheck); // Multiple validator
	return (
		<div className="App">
			<h1>Hello</h1>
			<input type="text" placeholder="Name" {...name} />
			<input type="text" placeholder="Nickname" {...nickname} />
		</div>
	);
};
```
