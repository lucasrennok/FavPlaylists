import React from 'react';

import {Link} from 'react-router-dom';
import './styles.css'

function Playlists(){
    // api get the state url firstvideo, playlistid, title first video
    return(
        <div className="text-playlists">
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
            <div className="playlist-videos">
                <h2>Trailer</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 1, urlVideo:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', titleVideo:'Sintel'}}} className="video" >
                    <h3>Sintel Trailer</h3>
                </Link>
            </div>

            <div className="playlist-videos">
                <h2>Movie</h2>
                <Link to={{pathname: "/playerarea", state:{playlistId: 2, urlVideo:'http://media.w3.org/2010/05/bunny/movie.mp4', titleVideo:'Bunny'}}} className="video">
                    <h3>Bunny Movie</h3>
                </Link>
            </div>
        </div>
    );
}

export default Playlists;