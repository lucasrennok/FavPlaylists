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
                        for(let i=0; i<playlists.length; i++){
                            data.push(
                                <Link to={{pathname: "/playerarea", state:{playlist: playlists[i], type: typesPl[i], urlVideo: playlists[i].url, titleVideo: playlists[i].title, poster: playlists[i].poster }}} className="video" >
                                    <h3>{playlists[i]}</h3>
                                </Link>
                            );
                        }
                        pls = data
                        console.log(pls);
                        playlistsMap.push(
                            <div className="playlist-videos" >
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