# Usage

```js
import useNetwork from "@custom_react_hook/useNetwork";

const App = () => {
	const handleNetworkChange = online => {
		console.log(online ? "Online" : "Offline");
	};
	const isOnLine = useNetwork(handleNetworkChange);
	return (
		<div>
			<h1>{isOnLine ? "Online" : "Offline"}</h1>
		</div>
	);
};
```
