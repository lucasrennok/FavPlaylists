import React from 'react';

import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PlaylistVideos from '../../components/PlaylistVideos/PlaylistVideos';

// I need to pass the URL
function PlayerArea({props}){
    const urlVideo = props.location.state;
    return (
        <div className="page-player">
            <PageHeader />
            <div className="div-content-videos">
                <div className="div-content-player">
                    <h2>Video_Title</h2>

                    <Player 
                        className="video-react-player"
                        playsInline
                        preload="auto"
                        autoPlay
                        muted
                        src={urlVideo}
                    ></Player>

                </div>
                <div className="div-playlists-player">
                    <PlaylistVideos />
                </div>
            </div>
        </div>
    )
}

export default PlayerArea;
