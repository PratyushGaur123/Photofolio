import AlbumCard from "./AlbumCard";
import Image from "./Image";
import { useState } from 'react';


function AlbumList(props) {
  const [openAlbum, setOpenAlbum] = useState({ album: "", open: false });


  return (
    <>
      {!openAlbum.open ? (
        <>
          <div className="album-list-top">
            <span className="album-heading"> Your Albums</span>
            <button className={props.showForm ? "album-cancel-button": "album-button"} onClick={props.toggleForm}> {props.showForm ? "Cancel" : "Add"} </button>
          </div>

          <div className="album-list">

            {props.albums.map((album, index) =>
              // pass the album and the key props only
              <AlbumCard album={album} setOpenAlbum={setOpenAlbum} key={index} />
            )}
          </div>


        </>
      ) : <Image openAlbum={openAlbum} setOpenAlbum={setOpenAlbum} />}
    </>

  )
}

export default AlbumList;

/* 
<div className="album-list">
  {props.albums.map( (album, index) => 
    return(
      // add parentheses and remove curly braces here
      (showImages ? <Image album={album} /> : <AlbumCard album={album} key={index} handleShowImages={handleShowImages} />)
    )      
  )}
</div>
<AlbumCard album={album} key={index} />
*/