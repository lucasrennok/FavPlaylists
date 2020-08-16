import React from 'react';

import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';

// I need to pass the URL
function PlayerArea({props}){
    const urlVideo = props.location.state;
    return (
        <div className="page-player">
            <PageHeader />
            <div className="div-content">
                <h2>{urlVideo}</h2>

                <Player 
                    className="videoplayer"
                    playsInline
                    src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                />

            </div>
        </div>
    )
}

export default PlayerArea;
