import React from 'react';

import {Link} from 'react-router-dom';
import './styles.css'

function PlaylistVideos(){
    // state = api.get(url)
    return(
        <div className="text-playlists">
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:'http://media.w3.org/2010/05/bunny/movie.mp4'}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
        </div>
    );
}

export default PlaylistVideos;