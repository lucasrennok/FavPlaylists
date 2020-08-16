import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';

// I need to pass the URL
function Player({props}){
    const urlVideo = props.location.state;
    return (
        <div className="page-player">
            <PageHeader />
            <div className="div-content">
                <h1>{urlVideo}</h1>
            </div>
        </div>
    )
}

export default Player;
