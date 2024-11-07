// This is a Parcel bug in my system.
// rename for `import React from "react" if something goes wrong`
import * as React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./src/App"

const rootDiv = document.getElementById("root")
if (!rootDiv)
	throw new Error("Página HTML não contém um container adequado ao React")
const root = createRoot(rootDiv)
root.render(<App />)
