import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';
import './styles.css'
import api from '../../services/api';

function VideosList(props){
    const type_playlist = props.type;
    const playlist_name = props.playlist;
    const filter_search = props.search

    const [videosData, setVideosData] = useState([])
    
    useEffect(()=>{
        if(filter_search===''){
            api.get('playlist/videos?type='+type_playlist+'&playlist='+playlist_name).then(response=>{
                setVideosData(response.data);
            })
        }else{
            api.get('search?search='+filter_search).then(response=>{
                setVideosData(response.data);
            });
        }
    },[]);

    let videos = []
    for(let i in videosData){
        videos[videos.length] = (
        <Link key={videosData[i].title} to={{pathname: "/playerarea", state:{type: type_playlist, playlist: playlist_name, urlVideo: videosData[i].url, titleVideo: videosData[i].title, poster: videosData[i].poster}}} className="video-thumb">
            <h3>{videosData[i].title}</h3>
            <img src={videosData[i].poster} width="150" alt='poster'></img>
        </Link>)
    }
    return(
        <div className="playlist-area">
            <div className="playlist-list">
                <h2>{videos.length>0? playlist_name : ''}</h2>
                {videos}
            </div>
        </div>
    );
}

export default VideosList;