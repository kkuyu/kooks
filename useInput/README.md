# Usage

```js
import useInput from "@custom_react_hook/useInput";
const App = () => {
	const maxLength = value => value.length <= 10;
	const name = useInput("Hello", maxLength);
	return (
		<div className="App">
			<h1>Hello</h1>
			<input type="text" placeholder="Name" {...name} />
		</div>
	);
};
```
