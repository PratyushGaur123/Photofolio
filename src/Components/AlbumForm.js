import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "../static/AlbumForm.module.css"


function AlbumForm(props){

    return (
        <>
        <ToastContainer />
        <form className='album-form'>
            <h3 className='form-heading'>Create an Album</h3>
            <input type="text" placeholder="Album Name" value={props.albumName} onChange={(e)=> props.setAlbumName(e.target.value)} required className='album-name-input'/>
            <button onClick={props.clearInput} className='clear-btn'>Clear</button>
            <button onClick={props.addAlbum} className='create-btn'>Create</button>
        </form>
        </>
    )
           
}

export default AlbumForm;