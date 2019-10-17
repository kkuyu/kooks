# Usage

```js
import useBeforeLeave from "@custom_react_hook/useBeforeLeave";

const App = () => {
	const begForLife = () => {
		document.querySelector("span").innerText += "Plase don't leave";
	};
	useBeforeLeave(begForLife);
	return (
		<div>
			<h1>Hello</h1>
			<span />
		</div>
	);
};
```
