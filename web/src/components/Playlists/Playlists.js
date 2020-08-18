import React from 'react';
import api from '../../services/api'
import {Link} from 'react-router-dom';
import './styles.css'

// async function getPlaylists(type){
//     let playlists = []
//     await api.get('playlist?type='+type).then(response => {
//         playlists = response.data.playlists_names;
//     });
//     // get first video from all
//     let data = []
//     for(let i=0; i<playlists.length; i++){
//         data[data.length]=(
//             <Link to={{pathname: "/playerarea", state:{playlist: playlists[i], type: type, urlVideo: 'playlists[i].url', titleVideo: 'playlists[i].title', poster: 'playlists[i].poster' }}} className="video" >
//                 <h3>{playlists[i]}</h3>
//             </Link>
//         )
//     }
//     console.log(data);
//     return data;
// }

async function Playlists(){
    // api get the state url firstvideo, playlist_name, title first video

    // let playlistsMap = []
    // let typesPl = []
    // await api.get('type').then(response => {
    //     typesPl = response.data.types;
    // });
    // for(let i=0; i<typesPl.length; i++){
    //     playlistsMap[playlistsMap.length]=(
    //         <div className="playlist-videos" key={typesPl[i]}>
    //             <h2>{typesPl[i]}</h2>
    //             {getPlaylists(typesPl[i])}
    //         </div>
    //     )
    // }
    return(
        <div className="text-playlists">
            {/* {playlistsMap} */}
        </div>
    );
}

export default Playlists;