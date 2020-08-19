import React from 'react';
import api from '../../services/api'
import {Link} from 'react-router-dom';
import './styles.css'

async function getPlaylists(type){
    let playlists = []

    await api.get('playlist?type='+type).then(response => {
        playlists = response.data.playlists_names;
    });
    // get first video from all
    let data = []
    for(let i=0; i<playlists.length; i++){
        data[data.length]=(
            <Link to={{pathname: "/playerarea", state:{playlist: playlists[i], type: type, urlVideo: playlists[i].url, titleVideo: playlists[i].title, poster: playlists[i].poster }}} className="video" >
                <h3>{playlists[i]}</h3>
                <h1>teste</h1>
            </Link>
        );
    }
    return data;
}

async function getType(){
    let typesPl = [];
    let playlistsMap = []

    await api.get('type').then(response => {
        typesPl = response.data.types;
    });

    for(let i=0; i<typesPl.length; i++){
        let pls = await getPlaylists(typesPl[i]);
        playlistsMap[playlistsMap.length]=(
            <div className="playlist-videos" >
                <h2>{typesPl[i]}</h2>
                {pls}
            </div>
        )
    }

    //conferindo
    console.log(playlistsMap);

    const divPls = document.getElementById('type-pls');
    divPls.append(playlistsMap);
}

function Playlists(){
    // api get data and send to 'type-pls' div
    getType();

    return(
        <div className="text-playlists" id="type-pls">
            {/* playlists here */}
        </div>
    )
}

export default Playlists;