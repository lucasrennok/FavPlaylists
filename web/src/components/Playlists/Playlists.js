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
            <Link to={{pathname: "/playerarea", state:{playlist: playlists[i], type: type, urlVideo: 'playlists[i].url', titleVideo: 'playlists[i].title', poster: 'playlists[i].poster' }}} className="video" >
                <h3>{playlists[i]}</h3>
            </Link>
        )
    }
    console.log(data);
    return data;
}

async function getTypes(){
    let typesPl = []
    await api.get('type').then(response => {
        typesPl = response.data;
    });
    return typesPl;
}

function Playlists(){
    // api get the state url firstvideo, playlist_name, title first video

    let playlistsMap = []
    let typesPl = []
    typesPl = getTypes()
    for(let i=0; i<typesPl.length; i++){
        playlistsMap[playlistsMap.length]=(
            <div className="playlist-videos" key={typesPl[i]}>
                <h2>{typesPl[i]}</h2>
                {getPlaylists(typesPl[i])}
            </div>
        )
    }
    //deu ruim, a função assincrona ta executando mas ta retornando os valores antes
    // não da pra transformar essa funcao em assincrona por causa das outras páginas
    console.log(typesPl)

    return(
        <div className="text-playlists">
            {playlistsMap}
            <h1>test</h1>
        </div>
    )
}

export default Playlists;