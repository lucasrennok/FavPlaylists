import React from 'react';

import {Link} from 'react-router-dom';
import './styles.css'

function PlaylistVideos(){
    return(
        <div className="text-playlists">
            <div className="playlist-videos">
                <h2>Anime</h2>
                <h3>Demon Slayer</h3>
            </div>

            <div className="playlist-videos">
                <h2>Podcast</h2>
                <h3>Flow</h3>
            </div>
        </div>
    );
}

export default PlaylistVideos;