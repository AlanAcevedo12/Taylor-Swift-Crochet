import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
// import Home from "./pages/Home/Home"
// import Landing from './pages/Landing/Landing';
// import Carta from './pages/Carta/Carta';
import Test from './pages/test/test';
// import Detalles1 from './pages/Detalles1/Detalles1';
import LoadingScreen from './pages/LoadingScreen';

const Home = lazy(() => import('./pages/Home/Home'));
const Landing = lazy(() => import('./pages/Landing/Landing'));
const Carta = lazy(() => import('./pages/Carta/Carta'));
const Detalles1 = lazy(() => import('./pages/Detalles1/Detalles1'));

function App() {
    document.title = "Harry Potter";

    return (
        <div className="App">
            <Suspense fallback={<LoadingScreen />}>
                <Routes>
                    <Route
                        excact
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        excact
                        path="/"
                        element={<Landing />}
                    />
                    <Route
                        excact
                        path="/carta"
                        element={<Carta />}
                    />
                    <Route
                        excact
                        path="/test"
                        element={<Test />}
                    />
                    <Route
                        excact
                        path="/detalles"
                        element={<Detalles1 />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
