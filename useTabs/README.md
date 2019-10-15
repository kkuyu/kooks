# Usage

```js
import useTabs from "@custom_react_hook/useTabs";
const content = [
	{ title: "tab1", content: "tab1 content" },
	{ title: "tab2", content: "tab2 content" },
];
const App = () => {
	const { currentItem, setCurrentIndex } = useTabs(0, content);
	return (
		<div>
			{content.map((content, index) => (
				<button
					type="button"
					key={index}
					onClick={() => setCurrentIndex(index)}
				>
					{content.title}
				</button>
			))}
			<div>{currentItem.content}</div>
		</div>
	);
};
```
