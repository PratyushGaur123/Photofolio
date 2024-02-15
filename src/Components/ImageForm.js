import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ImageForm(props){

    return (
        <>
        <ToastContainer/>
        <form onSubmit={!props.edit ? props.addImage : props.handleUpdateImage} className='image-form'>
            <h3 className='image-heading'>{!props.edit ? "Add Image to" : "Update Image in"} {props.openAlbum.album.name}</h3>
            <input type="text" placeholder="Title" value={props.title} onChange={(e)=> props.setTitle(e.target.value)} required className='image-inputs'/>
            <input type="text" placeholder="URL" value={props.url} onChange={(e)=> props.setUrl(e.target.value)} required className='image-inputs'/>
            <button onClick={props.clearInput} className='image-clear-btn'>Clear</button>
            <button className='image-btn'> {!props.edit ? "Create" :  "Update"} </button> 
            
            
        </form>
        </>
    )
           
}

export default ImageForm;