# Usage

```js
import useNotification from "@custom_react_hook/useNotification";

const App = () => {
	const triggerNotification = useNotification("Hello world!", {
		body: "Nice to meet you."
	});
	return (
		<div>
			<button onClick={triggerNotification}>Click!</button>
			{!triggerNotification && "This is not a supported browser."}
		</div>
	);
};
```
