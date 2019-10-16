# Usage

```js
import useTitle from "@custom_react_hook/useTitle";

const App = () => {
	const titleUpdater = useTitle("Loading!");

	// test code: The title changes after 5 seconds.
	setTimeout(() => {
		document.querySelector("h1").innerText = "Home";
		titleUpdater("Home");
	}, 5000);

	return (
		<div>
			<h1>Loading!</h1>
		</div>
	);
};
```
