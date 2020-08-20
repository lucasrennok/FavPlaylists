import React from 'react';

import 'video-react/dist/video-react.css'; // import css

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';

function CreatePlaylist(){
    return (
        <div className="create-playlist">
            <PageHeader />
            <div className="post-content">
                <h2>Create/Modify Playlist</h2>
                <div className="label-input">
                    <h3 className="label">Playlist Type</h3>
                    <input type="text" placeholder="type name"></input>

                    <h3 className="label">Playlist Name</h3>
                    <input type="text" placeholder="playlist name"></input>

                    <h3 className="label">Add Videos</h3>
                    <input type="text" placeholder="title"></input>
                    <input type="text" placeholder="url"></input>
                    <input type="text" placeholder="poster"></input>

                    <input id="submit-button" type="submit"></input>
                </div>
            </div>
        </div>
    )
}

export default CreatePlaylist;
