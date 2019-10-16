# Usage

```js
import useTabs from "@custom_react_hook/useTabs";
const content = [
	{ title: "tab1", content: "tab1 content" },
	{ title: "tab2", content: "tab2 content" },
	{ title: "tab3", content: "tab3 content" },
	{ title: "tab4", content: "tab4 content" },
];

const App = () => {
	const { tabButtonRef, currentIndex, onClick, onKeyDown } = useTabs(0, content);
	return (
		<div>
			<div ref={tabButtonRef}>
				{content.map((content, index) => (
					<button
						type="button"
						key={index}
						onClick={() => onClick(index)}
						onKeyDown={event => onKeyDown(event, index)}
					>
						{content.title}
					</button>
				))}
			</div>
			<div>{content[currentIndex].content}</div>
		</div>
	);
};
```
