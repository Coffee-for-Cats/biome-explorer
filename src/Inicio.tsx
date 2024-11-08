import * as React from "react"
import { useState } from "react"

import EcologyImg from "./imgs/EcologyImg"

export function Inicio() {
	const [jogando, setJogando] = useState(false)

	if (!jogando) {
		return (
			<div className="flex container w-4/5 my-28 border-2 border-gray-300 rounded-xl shadow-xl p-4 bg-blend-hard-light bg-green-50 bg-opacity-40">
				<div id="left" className="m-auto">
					<h1 className="text-6xl text-green-900 font-bold">Biome Explorer</h1>
					<p className="font-medium mt-4">
						Um jogo interativo sobre diversidade, inclusão e sociedade.
					</p>

					<div className="flex mt-6">
						<button
							type="button"
							onClick={jogar}
							className="p-2 rounded-md bg-green-800 text-green-100 m-2 font-bold hover:shadow-xl"
						>
							Jogue Agora
						</button>
						<button
							type="button"
							className="p-2 rounded-md text-green-900 font-bold m-2 hover:shadow-xl"
						>
							Sobre o jogo
						</button>
					</div>
				</div>
				<div id="right" className="m-auto">
					<EcologyImg width={300} height={300} />
				</div>
			</div>
		)
	}
	return (
		<div className="flex container w-4/5 my-28 border-2 border-gray-300 rounded-xl shadow-xl p-4 bg-blend-hard-light bg-green-50 bg-opacity-40">
			<div className="w-full h-full flex flex-col justify-center items-center">
				<h1 className="text-4xl font-bold text-green-900">Biome Explorer</h1>
				<p className="text-gray-900 font-medium mt-3">Em manutenção</p>
			</div>
		</div>
	)

	function jogar() {
		setJogando(true)
	}
}
