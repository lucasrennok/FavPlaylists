import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './pages/Landing';
import PlaylistsPage from './pages/PlaylistsPage';
import PlayerArea from './pages/PlayerArea';
import CreatePlaylist from './pages/CreatePlaylist'

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/create_playlist" component={CreatePlaylist} />
            <Route path="/playlists" component={PlaylistsPage} />
            <Route path="/playerarea" component={(data) => <PlayerArea props={data} />}/>
        </BrowserRouter>
    )
}

export default Routes;


// <Link to="/study" className="study"> 
//     <img src={studyIcon} alt="Estudar"/>
//     Estudar
// </Link>
