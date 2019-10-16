# Usage

```js
import useConfirm from "@custom_react_hook/useConfirm";
const App = () => {
	const addLaugh = () => {
		document.querySelector("h1").innerText += "😀";
	};
	const addMonkey = () => {
		document.querySelector("h1").innerText += "🙊";
	};
	const cenacle = () => {};
	const addText = useConfirm("Are you sure?", addLaugh, addMonkey);
	return (
		<div>
			<h1>🙂</h1>
			<button type="button" onClick={addText}>
				Hello
			</button>
		</div>
	);
};
```
