# Usage

```js
import usePreventLeave from "@custom_react_hook/usePreventLeave";
const App = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			{/* Click on the Protect button and close the window to see if it ends. */}
			<button type="button" onClick={enablePrevent}>
				Protect
			</button>
			<button type="button" onClick={disablePrevent}>
				Unprotect
			</button>
		</div>
	);
};
```
