import React, { useEffect, useState } from 'react';
import axios from 'axios'

function PlayList(){
    const auth = "https://accounts.spotify.com/authorize"
    const client_id = "0865a49b468347ac969cb4d153ab6cf9";
    const redirect_uri = "http://localhost:3000"
    const response_type = "token"
    const scope="playlist-modify-private"

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");

    const [songResult, setResult] = useState([]);
    const [selectedSong, setSelectedSong] = useState([]);

    const Search = (e) => {
        e.preventDefault();
        axios.get(`https://api.spotify.com/v1/search`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        }).then((response)=>{
            setResult(response.data.tracks.items);
            console.log(songResult);
        }).catch((e) => console.log(e));
    }

    const Songs = (props) => {
        return(
            <>
                <tr>
                    <td><img className="songImage" src={props.url} alt=""/></td>
                    <td className='textTdElement'>{props.name}</td>
                    <td className='textTdElement'>{props.artistName}</td>
                    <td className='textTdElement'>{props.albumName}</td>
                    <td>{!props.selected ? <button type="submit" onClick={()=>AddSongToSelected(props)}>Select</button> : <button type="submit">Deselect</button>}</td>
                </tr>
            </>
        )
    }
    function AddSongToSelected(props){
        let newSelectedSong = selectedSong;
        newSelectedSong.push(props);
        setSelectedSong(newSelectedSong);
        console.log(selectedSong);
    }

    useEffect(() => {
        const hash = window.location.hash
        let tokenIn = window.localStorage.getItem("token")
    
        if (!tokenIn && hash) {
            tokenIn = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = "";
            console.log("URI change");
            
            window.localStorage.setItem("token", tokenIn)
        }
        console.log(`tokenIn ${tokenIn}`)
        setToken(tokenIn)
        console.log(`token ${token}`)
      }, [token])
    
    return(
        <div className='Playlist'>
            
            <a className= "btn-login" href={`${auth}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`}>Spotify Login</a>
            <form onSubmit={Search}>
                <input type="text" placeholder="Search a Song..." onChange={e => setSearchKey(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            
            <table>
                <tbody>
                    {songResult.map((data,index) => 
                            <Songs  
                                key         = {index} 
                                uri         = {data.uri} 
                                selected    = {false} 
                                url         = {data.album.images[2].url} 
                                name        = {data.name} 
                                artistName  = {data.album.artists[0].name} 
                                albumName   = {data.album.name}
                            />
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default PlayList;