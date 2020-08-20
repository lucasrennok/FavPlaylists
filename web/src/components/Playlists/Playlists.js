import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import {Link} from 'react-router-dom';
import './styles.css'

function Playlists(){
    const [types, setTypes] = useState([])

    useEffect(() => {
        let typesPl = [];
        let playlistsMap = []
    
        api.get('type').then(response => {
            typesPl = response.data.types
            }).then(async()=>{
                for(let i=0; i<typesPl.length; i++){
                    let pls = []
                    await api.get('playlist?type='+typesPl[i]).then(response => {
                        let playlists = response.data.playlists_names;
                        let data = []
                        for(let j=0; j<playlists.length; j++){
                            data.push(
                                <Link key={playlists[j]} to={{pathname: "/playerarea", state:{playlist: playlists[j], type: typesPl[i], urlVideo: '', titleVideo: 'Playlist: '+playlists[j]}}} className="video" >
                                    <h3>{playlists[j]}</h3>
                                </Link>
                            );
                        }
                        pls = data
                        playlistsMap.push(
                            <div key={typesPl[i]} className="playlist-videos" >
                                <h2>{typesPl[i]}</h2>
                                {pls}
                            </div>
                        );
                    });
                }}).then(()=>{
                    setTypes(playlistsMap);}
                );
    }, []);

    return(
        <div className="text-playlists" id="type-pls">
            {types}
        </div>
    );
}

export default Playlists;