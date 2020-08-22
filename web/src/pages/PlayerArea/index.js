import React, { useState, useEffect } from 'react';

import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import VideosList from '../../components/VideosList';
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';
import ReplayControl from 'video-react/lib/components/control-bar/ReplayControl';
import ForwardControl from 'video-react/lib/components/control-bar/ForwardControl';
import PlaybackRateMenuButton from 'video-react/lib/components/control-bar/PlaybackRateMenuButton';
import VolumeMenuButton from 'video-react/lib/components/control-bar/VolumeMenuButton';
import LoadingSpinner from 'video-react/lib/components/LoadingSpinner';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';

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
    const [playReplayButton, setPlayReplayButton] = useState('Start');

    function handleFirstPoint(){
        const statePlayer = player.getState()
        if(statePlayer.player.currentTime<secondPoint){
            setFirstPoint(statePlayer.player.currentTime);
        }else{
            window.alert('Select the second point first');
        }
    }

    function handleSecondPoint(){
        const statePlayer = player.getState()
        if(statePlayer.player.currentTime>firstPoint){
            setSecondPoint(statePlayer.player.currentTime);
        }else{
            window.alert('The second point has to be after the first point');
        }
    }

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function handleStartReplay(){
        if(secondPoint-firstPoint>3 && player.getState().player.paused===false && playReplayButton==='Start'){
            player.seek(firstPoint);
            setPlayReplayButton('Running');
            await sleep((secondPoint-firstPoint)*1000);
            await handleStartReplay();
            setPlayReplayButton('Start');
        }else if(secondPoint-firstPoint<=3){
            player.pause()
            window.alert('Time between the first point and the second point is very short. <= 3secs')
        }
    }
    
    function handlePlayer(newPlayer){
        setPlayer(newPlayer);
    }

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
                        ref={(player) => {handlePlayer(player);}}
                    >
                        <BigPlayButton position="center" />
                        <ControlBar>
                            <VolumeMenuButton vertical />
                            <ReplayControl seconds={30} order={2.1} />
                            <ForwardControl seconds={30} order={3.1} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1}/>
                        </ControlBar>
                    </Player>

                    <div id="setRepeat">
                        <button onClick={handleStartReplay}>{playReplayButton}</button>
                        <button onClick={handleFirstPoint}>First Point: {firstPoint}</button>
                        <button onClick={handleSecondPoint}>Second Point: {secondPoint}</button>
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
