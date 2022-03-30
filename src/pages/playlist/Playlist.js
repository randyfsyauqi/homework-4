import React, { useEffect } from 'react';
import Search from '../search/Search.js'

function PlayList(){
    const spotify_search = new Search();
    const auth = "https://accounts.spotify.com/authorize"
    const client_id = "50617af7a91f49b78dd47bcc7ee69433";
    const redirect_uri = "http://localhost:3000"
    const response_type = "token"
    const scope="playlist-modify-private"

    const Result = () => {
        return spotify_search.state.result.map(data => (
            <div key={data.album.id}><img src={data.album.images[2].url}></img></div>
            
        ))
    }

    return(
        <div className='Playlist'>
            
            <a href={`${auth}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}>Spotify Login</a>
            <form onSubmit={spotify_search.searchCall}>
                <input type="text" onChange={event => spotify_search.receiveSearchKey(event.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>
            
            {Result()}

        </div>
    )
}

export default PlayList;