# Usage

```js
import useAxios from "@custom_react_hook/useAxios";
const content = [
	{ title: "tab1", content: "tab1 content" },
	{ title: "tab2", content: "tab2 content" },
	{ title: "tab3", content: "tab3 content" },
	{ title: "tab4", content: "tab4 content" }
];

const App = () => {
	const { loading, data, error, refetch } = useAxios({
		url: "https://yts.lt/api/v2/list_movies.json"
	});
	return (
		<div>
			<h1>{data && data.status}</h1>
			<h2>{loading && "loading"}</h2>
			<button onClick={refetch}>sdf</button>
		</div>
	);
};
```
