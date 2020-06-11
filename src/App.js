import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import MainPage from "./components/main_page/MainPage";
import {PictureProvider} from "./context/PictureContext";
import NavBar from "./components/navbar/NavBar";
import GlobalStyle from "./components/style-components/styled/GlobalStyle";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";



function App() {
    return (
        <div className="App" data-testid="app">

            <PictureProvider>
                <GlobalStyle />

                    <div className="backGround" />
                    <Router>
                        <NavBar/>
                        <div className="container">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/search" component={MainPage}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/contacts" component={Contacts}/>
                        </div>
                    </Router>
            </PictureProvider>
        </div>
    );
}

export default App;
