import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './pages/Landing';
//import Playlists from './pages/Playlists';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            {/* <Route path="/playlists" component={Playlists} /> */}
        </BrowserRouter>
    )
}

export default Routes;