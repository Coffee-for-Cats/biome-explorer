import * as React from "react"
import { useState } from "react"

export function App() {
	const [text, setText] = useState("Hello")
	return (
		<div>
			<h1 className="bg-blue-500">Hello React!</h1>
			<p>{text}</p>
			<button type="button" onClick={increment}>
				Teste
			</button>
		</div>
	)

	function increment() {
		setText(`${text} world`)
	}
}
