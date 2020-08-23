import React from 'react';
import backgroundImg from '../../assets/images/background2.png'

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';

function Landing(){
    return (
        <div className="page-landing">
            <PageHeader />
            <div className="div-content">
                <img src={backgroundImg} alt="background" className="backgroundImg"/>
                <div className="text-landing">
                    <h2>Welcome to</h2>
                    <h1>FavPlaylists</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing;
