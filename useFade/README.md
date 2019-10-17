# Usage

```js
import useFade from "@custom_react_hook/useFade";

const App = () => {
	const fadeInH1 = useFade(2, "ease-in-out", 1, "fadeIn");
	const fadeInH2 = useFade(2, "ease-in-out", 1, "fadeOut");
	return (
		<div>
			<h1 {...fadeInH1}>Hello</h1>
			<h2 {...fadeInH2}>Hi</h2>
		</div>
	);
};
```
