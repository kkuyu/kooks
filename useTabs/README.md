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
			<div ref={tabButtonRef} role="tablist">
				{content.map((content, index) => (
					<button
						key={index}
						type="button"
						role="tab"
						id={`tablist${index}`}
						aria-controls={`tabpanel${index}`}
						onClick={() => onClick(index)}
						onKeyDown={event => onKeyDown(event, index)}
						style={{ color: `${ index === currentIndex ? "blue" : "black" }`}}
						aria-selected={ index === currentIndex ? "true" : "false" }
					>
						{content.title}
					</button>
				))}
			</div>
			<div>
				{content.map((content, index) => (
					<div
						key={index}
						role="tabpanel"
						id={`tabpanel${index}`}
						aria-labelledby={`tablist${index}`}
						style={{ display: `${ index === currentIndex ? "block" : "none" }`}}
					>
						{content.content}
					</div>
				))}
			</div>
		</div>
	);
};
```
