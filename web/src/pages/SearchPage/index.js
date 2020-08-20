import React, { useEffect , useState} from 'react';

import api from '../../services/api'
import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import VideosList from '../../components/VideosList';

function SearchPage({props}){
    const search_text = props.location.state.search;

    const [videosFound, setVideosFound] = useState([]);
    useEffect(()=>{
        api.get('type').then(async response => {
            let videosF = []
            const types = response.data.types
            for(let i=0; i<types.length; i++){
                await api.get('playlist?type='+types[i]).then(r => {
                    let playlists_names = r.data.playlists_names;
                    for(let j=0; j<playlists_names.length; j++){
                        videosF[videosF.length] = (
                            <VideosList key={playlists_names[j]} type={types[i]} playlist={playlists_names[j]} search={search_text}/>
                        )
                    }
                    let videosAux = [...videosF, ...videosFound]
                    setVideosFound(videosAux);
                })
            }
        })
    },[])

    return (
        <div className="search-page">
            <PageHeader />
            <h1 id="result">Results</h1>
            <div className="search-content">
                {videosFound}
            </div>
        </div>
    )
}

export default SearchPage;
