import React, { useState, useEffect } from 'react';

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

    const [player, setPlayer] = useState(undefined);
    const [firstPoint,setFirstPoint] = useState(0);
    const [secondPoint,setSecondPoint] = useState(0);

    function handleFirstPoint(){
        const statePlayer = player.getState()
        if(statePlayer.player.currentTime<secondPoint){
            setFirstPoint(statePlayer.player.currentTime);
        }else{
            window.alert('Select the second point first and after the first point');
        }
    }

    function handleSecondPoint(){
        const statePlayer = player.getState()
        setSecondPoint(statePlayer.player.currentTime);
    }

    // useEffect(()=>{
    //     const time = 10
    //     if(time>secondPoint && secondPoint!==0){
    //         player.seek(firstPoint);
    //     }
    // },[])

    //to pick the videos from a playlist
    return (
        <div className="page-player">
            <PageHeader />
            <div className="div-content-videos">
                <div className="div-content-player">
                    <h2>{titleVideo}</h2>

                    <Player 
                        ref={(player) => {setPlayer(player)}}
                        className="video-react-player"
                        playsInline
                        preload="auto"
                        fluid
                        poster={videoPoster}
                        // autoPlay
                        // muted
                        src={urlVideo}
                    ></Player>

                    <div id="setRepeat">
                        <button onClick={handleFirstPoint}>FP</button>
                        <button onClick={handleSecondPoint}>SP</button>
                    </div>

                </div>
                <div className="div-playlists-player">
                    <VideosList type={type_playlist} playlist={playlist_name} search='' />
                </div>
            </div>
        </div>
    )
}

export default PlayerArea;
