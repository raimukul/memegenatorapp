import React from "react"
import Header from "./Components/Header"
import MemeGenerator from "./Components/MemeGen"
import './App.css'

function App() {
    return (
        <div className="app-container" data-theme="dark">
            <Header />
            <MemeGenerator />
            
        </div>
    )
}

export default App
