import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import 'video-react/dist/video-react.css'; // import css
import api from '../../services/api'
import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';

function CreatePlaylist(){
    const history = useHistory()

    const [type, setType] = useState('');
    const [playlist, setPlaylist] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [poster, setPoster] = useState('');

    function handleSubmitButton(event){
        event.preventDefault();
        const name = playlist;

        api.post('create', {
            type,
            name,
            title,
            url,
            poster
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            
            history.push('/playlists')
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return (
        <div className="create-playlist">
            <PageHeader />
            <main className="post-content">
                <h2>Create/Modify Playlist</h2>
                <form onSubmit={handleSubmitButton}>
                    <fieldset className="label-input">
                        <legend className="label">Playlist Type</legend>
                        <input 
                            type="text" 
                            placeholder="type name"
                            value={type} 
                            onChange={(e)=>{ setType(e.target.value) }}
                        ></input>
                    </fieldset>

                    <fieldset className="label-input">
                        <legend className="label">Playlist Name</legend>
                        <input 
                            type="text" 
                            placeholder="playlist name"
                            value={playlist} 
                            onChange={(e)=>{ setPlaylist(e.target.value) }}
                        ></input>
                    </fieldset>

                    <fieldset className="label-input">
                        <legend className="label">Add Videos</legend>
                        <input 
                            type="text" 
                            placeholder="title"
                            value={title} 
                            onChange={(e)=>{ setTitle(e.target.value) }}
                        ></input>
                        <input 
                            type="text" 
                            placeholder="url"
                            value={url} 
                            onChange={(e)=>{ setUrl(e.target.value) }}
                        ></input>
                        <input 
                            type="text" 
                            placeholder="poster"
                            value={poster} 
                            onChange={(e)=>{ setPoster(e.target.value) }}
                        ></input>
                    </fieldset>

                    <button id="submit-button" type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}

export default CreatePlaylist;
