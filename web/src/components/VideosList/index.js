import React from 'react';

import {Link} from 'react-router-dom';
import './styles.css'

function VideosList({props}){
    console.log("teste",props.location.state.playlist, props.location.state.type);
    // api get the state url firstvideo, playlistid, title first video
    const videosData = [{urlVideo: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo: 'Sintel', poster: 'https://www.hypeness.com.br/wp-content/uploads/2019/11/Coala_ince%CC%82ndios_Horizontal.jpg'},{urlVideo: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4', titleVideo: 'Sintel 2', poster: 'https://cdn.sabado.pt/images/2017-04/img_797x448$2017_04_06_15_15_03_216348.jpg'},{playlist: 'Sintel Trailer', urlVideo: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo: 'Sintel3', poster: 'https://www.hypeness.com.br/wp-content/uploads/2019/11/Coala_ince%CC%82ndios_Horizontal.jpg'},{playlist: 'Sintel Trailer', urlVideo: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4', titleVideo: 'Sintel 4', poster: 'https://cdn.sabado.pt/images/2017-04/img_797x448$2017_04_06_15_15_03_216348.jpg'}]
    let videos = []
    for(let i in videosData){
        videos[videos.length] = (
        <Link to={{pathname: "/playerarea", state:{urlVideo: videosData[i].url, titleVideo: videosData[i].title, poster: videosData[i].poster}}} className="video-thumb" key={videosData[i].titleVideo}>
            <h3>{videosData[i].titleVideo}</h3>
            <img src={videosData[i].poster} width="150" alt='poster'></img>
        </Link>)
    }
    return(
        <div className="playlist-area">
            <div className="playlist-list">
                <h2>Playlist Name</h2>
                {videos}
            </div>
        </div>
    );
}

export default VideosList;