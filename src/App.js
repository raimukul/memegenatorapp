import React from "react"
import Header from "./Components/Header"
import MemeGenerator from "./Components/MemeGen"
import './App.css'
import { Container } from "@material-ui/core"

function App() {
    return (
        <div>
        <Container>
        <div className="app-container" data-theme="dark">
            <Header />
            <MemeGenerator />
            
        </div>
        </Container>
        </div>
    )
}

export default App
