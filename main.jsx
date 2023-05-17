import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
import './style.css'

const root = createRoot(document.getElementById('app'))

// render del componente app
root.render(<App />)
