import React from 'react';

import {Link} from 'react-router-dom';
import './styles.css'

function PlaylistVideos(){
    // state = api.get(url)
    return(
        <div className="text-playlists">
            <div className="playlist-videos">
                <h2>Anime</h2>
                <Link to={{pathname: "/player", state:'Demon'}} className="video" >
                    <h3>Demon Slayer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Podcast</h2>
                <Link to={{pathname: "/player", state:'Flow'}} className="video">
                    <h3>Flow</h3>
                </Link>
            </div>
        </div>
    );
}

export default PlaylistVideos;