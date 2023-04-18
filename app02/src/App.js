import React from 'react';
import './Style.module.css';
import Container from './components/container/js/Container';
import Header from './components/header/js/Header';
import NavBar from './components/NavBar/js/NavBar';
import Dialogs from "./components/Dialogs/js/Dialogs";
import classes from "./Style.module.css";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/js/News";
import Music from "./components/Music/js/Music";
import Settings from "./components/Settings/js/Settings";


function App(props) {

    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header/>
                <NavBar/>
                <div className={classes.contentBox}>
                    <Routes>
                        <Route path='/Container/' element={<Container post={props.post}/>}/>
                        <Route path='/Dialogs/*' element={<Dialogs dialog={props.dialog} message={props.message}/>}/>
                        <Route path='/News/' element={<News/>}/>
                        <Route path='/Music/' element={<Music/>}/>
                        <Route path='Settings/' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
