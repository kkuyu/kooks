# Usage

```js
import useFullscreen from "@custom_react_hook/useFullscreen";

const App = () => {
	const onFullScreen = isFull => {
		document.querySelector("span").innerText = `${
			isFull ? "Full" : "Small"
		} Size View!`;
	};
	const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
	return (
		<div>
			<div ref={element}>
				<img src="https://picsum.photos/300/200" alt="" />

				<p style={{ color: "red" }}>Small Size View</p>
				<button onClick={exitFull}>Exit fullscreen</button>
			</div>
			<button onClick={triggerFull}>Mack fullscreen</button>
		</div>
	);
};
```
