import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Playlists from '../../components/Playlists/Playlists';

function PlaylistsPage(){
    return (
        <div className="page-playlists">
            <PageHeader />
            <div className="div-content">
                <Playlists />
            </div>
        </div>
    )
}

export default PlaylistsPage;
