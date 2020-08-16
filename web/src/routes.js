import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Playlists from './pages/Playlists';
import PlayerArea from './pages/PlayerArea';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/playerarea" component={(data) => <PlayerArea props={data} />}/>
        </BrowserRouter>
    )
}

export default Routes;


// <Link to="/study" className="study"> 
//     <img src={studyIcon} alt="Estudar"/>
//     Estudar
// </Link>
