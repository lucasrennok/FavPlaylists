import React, { useState } from 'react';
import logoIcon from '../../assets/images/icons/logo.png'
import playlistIcon from '../../assets/images/icons/playlistIcon.svg'

import {Link, Redirect} from 'react-router-dom';
import './styles.css'

function PageHeader(){

    const [searchText, setSearchText] = useState('');
    const [button, setButton] = useState();

    function handleSearchText(event){
        const text = event.target.value
        setSearchText(text)
    }

    function startSearch(event){
        if(event.key==='Enter'){
            setButton(
                <Redirect to={{pathname:"/search", state: {search: searchText}}} />)
        }
    }

    return(
        <header className="page-header">
            <Link to="/playlists" className="list-types"> 
                <div className="div-playlist">
                    <img src={playlistIcon} alt="playlists" className="icons"/>
                    <h3>Playlists</h3>
                </div>
            </Link>

            <div className="div-search">
                <h3>Search videos</h3>
                <input type="text" className="searchInput" value={searchText} onChange={handleSearchText} onKeyDown={startSearch} />
                {button}
            </div>

            <Link to="/create_playlist" className="homepage"> 
                <div className="div-logo">
                    <h2>FavPL</h2>
                    <img src={logoIcon} alt="logo" className="icons"/>
                </div>
            </Link>
        </header>
    );
}

export default PageHeader;