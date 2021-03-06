import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
