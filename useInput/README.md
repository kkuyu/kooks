# Usage

```js
import useInput from "@custom_react_hook/useInput";
const App = () => {
	const maxLength = value => value.length <= 10;
	const characterCheck = value => !value.includes("@");
	const name = useInput("John Doe", maxLength); // One validator
	const nickname = useInput("John", maxLength, characterCheck); // Multiple validator
	return (
		<div className="App">
			<div>
				<label htmlFor="inputName">Name</label>
				<input
					type="text"
					placeholder="Name"
					id="inputName"
					aria-describedby="descriptionName"
					value={name.value}
					onChange={name.onChange}
				/>
				<p
					id="descriptionName"
					style={{ color: `${!name.isError ? "black" : "red"}` }}
				>
					Please enter no more than 10 characters.
				</p>
			</div>
			<div>
				<label htmlFor="inputNickname">Nickname</label>
				<input
					type="text"
					placeholder="Nickname"
					id="inputNickname"
					aria-describedby="descriptionNickname"
					value={nickname.value}
					onChange={nickname.onChange}
				/>
				<p
					id="descriptionNickname"
					style={{ color: `${!nickname.isError ? "black" : "red"}` }}
				>
					Please enter no more than 10 characters.<br />
					Special character "@" cannot be included.
				</p>
			</div>
		</div>
	);
};
```
