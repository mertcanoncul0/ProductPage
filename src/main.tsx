import { render } from "preact"
import { App } from "./app.tsx"

import "./styles/reset.css"
import "./styles/globals.css"

render(<App />, document.getElementById("app")!)
