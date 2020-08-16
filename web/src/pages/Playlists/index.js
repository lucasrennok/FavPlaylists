import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PlaylistVideos from '../../components/PlaylistVideos/PlaylistVideos';

function Playlists(){
    return (
        <div className="page-playlists">
            <PageHeader />
            <div className="div-content">
                <PlaylistVideos />
            </div>
        </div>
    )
}

export default Playlists;
