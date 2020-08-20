import React from 'react';

import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import VideosList from '../../components/VideosList';

// I need to pass the URL
function PlayerArea({props}){
    const urlVideo = props.location.state.urlVideo;
    const titleVideo = props.location.state.titleVideo;
    const videoPoster = 'https://thenextdoor.org/wp-content/uploads/2016/11/video_placeholder.jpg';
    const type_playlist = props.location.state.type;
    const playlist_name = props.location.state.playlist;

    //to pick the videos from a playlist
    return (
        <div className="page-player">
            <PageHeader />
            <div className="div-content-videos">
                <div className="div-content-player">
                    <h2>{titleVideo}</h2>

                    <Player 
                        className="video-react-player"
                        playsInline
                        preload="auto"
                        fluid
                        poster={videoPoster}
                        // autoPlay
                        // muted
                        src={urlVideo}
                    ></Player>

                </div>
                <div className="div-playlists-player">
                    <VideosList type={type_playlist} playlist={playlist_name}/>
                </div>
            </div>
        </div>
    )
}

export default PlayerArea;
