# Usage

```js
import useClick from "@custom_react_hook/useClick";
const App = () => {
	const sayHi = () => alert("Hi!");
	const title = useClick(sayHi);
	return (
		<div>
			<h1 ref={title}>Hi</h1>
		</div>
	);
};
```
