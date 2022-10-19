import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/home";
import Wspolpraca from "./views/wspolpraca";
import Oferta from "./views/oferta";
import Kontakt from "./views/kontakt";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="antialiased bg-content-background min-h-screen flex flex-col overflow-hidden relative">
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path="/home"
                        element={
                            <React.Suspense fallback={<>Ładowanie...</>}>
                                <Home />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/wspolpraca"
                        element={
                            <React.Suspense fallback={<>Ładowanie...</>}>
                                <Wspolpraca />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/oferta"
                        element={
                            <React.Suspense fallback={<>Ładowanie...</>}>
                                <Oferta />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/kontakt"
                        element={
                            <React.Suspense fallback={<>Ładowanie...</>}>
                                <Kontakt />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <React.Suspense fallback={<>Ładowanie...</>}>
                                <Home />
                            </React.Suspense>
                        }
                    />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
