import React, { useState } from 'react';

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

import BigPlayButton from 'video-react/lib/components/BigPlayButton';

import secondsToMinutesToHours from '../../utils/secondsToMinutes'

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
        setFirstPoint(Math.round(statePlayer.player.currentTime * 100) / 100);
    }

    function handleSecondPoint(){
        const statePlayer = player.getState()
        setSecondPoint(Math.round(statePlayer.player.currentTime * 100) / 100);
    }

    function sleepSimple(){
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    async function sleepTimer(ms, playback){
        for(let i=0; i<ms; i+=1000){
            await sleepSimple();
            if(player.getState().player.paused || player.getState().player.playbackRate!==playback){
                break;
            }
        }
    }

    async function handleStartReplay(){
        const butStart = document.getElementById('startButton');
        const playback = player.getState().player.playbackRate;
        const fp = firstPoint;
        const sp = secondPoint;

        if(firstPoint>secondPoint){
            let aux = firstPoint;
            setFirstPoint(secondPoint);
            setSecondPoint(aux);
            window.alert('Points changed, click Start button again');
        }else if(secondPoint-firstPoint>3 && player.getState().player.paused===false && playReplayButton==='Start'){
            player.seek(firstPoint);
            setPlayReplayButton('Running');
            butStart.disabled = true;
            await sleepTimer(((secondPoint-firstPoint)/player.getState().player.playbackRate)*1000, playback);
            if(player.getState().player.paused===false && player.getState().player.playbackRate===playback){
                handleStartReplay();
                setFirstPoint(fp); //visual fix
                setSecondPoint(sp);
            }else{
                setPlayReplayButton('Start');
                butStart.disabled = false;
            }
        }else if(secondPoint-firstPoint<=3){
            player.pause()
            window.alert('Time between the first point and the second point is very short. <= 3secs')
        }
    }
    
    function handlePlayer(newPlayer){
        setPlayer(newPlayer);
    }

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
                        <label id="repeat-text">Repeat between:</label>
                        <button onClick={handleStartReplay} id="startButton" disabled={false}>{playReplayButton}</button>
                        <button onClick={handleFirstPoint}>First Point: {secondsToMinutesToHours(firstPoint)}</button>
                        <button onClick={handleSecondPoint}>Second Point: {secondsToMinutesToHours(secondPoint)}</button>
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
