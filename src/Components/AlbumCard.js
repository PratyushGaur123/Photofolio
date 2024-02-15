import { useState } from 'react';
import Photo from '../static/photos.png';

function AlbumCard(props) {

    function handleOpenAlbums() {
        props.setOpenAlbum({album: props.album, open:true});
    }

    return (
        <div className="album-div" onClick={handleOpenAlbums}>
            <img src={Photo} alt="Album" className='img' />
            <span className="album-name"> {props.album.name} </span>
        </div>
    )

}

export default AlbumCard;


/*  
*/