# Usage

```js
import useScroll from "@custom_react_hook/useScroll";

const App = () => {
	const { y } = useScroll();
	return (
		<div style={{ height: "200vh" }}>
			<h1
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					color: y < 100 ? "blue" : "red"
				}}
			>
				hi
			</h1>
		</div>
	);
};
```
