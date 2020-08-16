import React from 'react';

import {Link} from 'react-router-dom';
import './styles.css'

function Playlists(){
    // api get the state url firstvideo, playlist_name, title first video
    const playlists = [{type:'Trailer',playlist: 'Sintel', urlVideo: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo: 'Sintel TRAILER'},{type: 'Movie',playlist: 'SintelMov', urlVideo: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4', titleVideo: 'Sintel Movie'}]
    // api to get all types:
    // api to get things per type in a vector of vectors
    let playlistsMap = []
    for(let i=0; i<playlists.length; i++){
        playlistsMap[playlistsMap.length]=(
            <div className="playlist-videos" key={playlists[i].playlist}>
                <h2>{playlists[i].type}</h2>
                <Link to={{pathname: "/playerarea", state:{playlist: playlists[i].playlist, urlVideo: playlists[i].urlVideo, titleVideo: playlists[i].titleVideo }}} className="video" >
                    <h3>{playlists[i].playlist}</h3>
                </Link>
            </div>
        )
    }
    return(
        <div className="text-playlists">
            {playlistsMap}
        </div>
    );
}

export default Playlists;