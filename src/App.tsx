import * as React from "react"
import { useState } from "react"

import { Inicio } from "./Inicio"

export function App() {
	const jogando = useState(false)

	return (
		<div className="bg-gray-200 w-screen h-screen flex justify-center greenWavesBG">
			{/* Conteúdo */}
			<Inicio />
		</div>
	)
}
