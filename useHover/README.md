# Usage

```js
import useHover from "@custom_react_hook/useHover";
const App = () => {
	const sayHi = () => alert("Hi!");
	const title = useHover(sayHi);
	return (
		<div>
			<h1 ref={title}>Hi</h1>
		</div>
	);
};
```
