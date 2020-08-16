import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Playlists from './pages/Playlists';
import Player from './pages/Player';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/player" component={(data) => <Player props={data} />}/>
        </BrowserRouter>
    )
}

export default Routes;


// <Link to="/study" className="study"> 
//     <img src={studyIcon} alt="Estudar"/>
//     Estudar
// </Link>
