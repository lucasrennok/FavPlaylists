import React from 'react';
import logoIcon from '../../assets/images/icons/logo.png'
import playlistIcon from '../../assets/images/icons/playlistIcon.svg'

import {Link} from 'react-router-dom';
import './styles.css'

function PageHeader(){
    return(
        <header className="page-header">
            <Link to="/playlists" className="list-types"> 
                <div className="div-playlist">
                    <img src={playlistIcon} alt="playlists" className="icons"/>
                    <h3>Playlists</h3>
                </div>
            </Link>

            <div className="div-search">
                <h3>Search</h3>
                <input type="text" className="searchInput" />
            </div>

            <Link to="/" className="homepage"> 
                <div className="div-logo">
                    <h2>FavPL</h2>
                    <img src={logoIcon} alt="logo" className="icons"/>
                </div>
            </Link>
        </header>
    );
}

export default PageHeader;