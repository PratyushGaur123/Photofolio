import edit from "../static/edit.png";
import deleteBtn from "../static/trash-bin.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ImageList(props) {
    return (
        <div>
            <ToastContainer />
            <div className="image-list-top">
                <span className="image-heading"> Images in {props.openAlbum.album.name}</span>
                <button className={props.showForm ? "image-cancel-button": "image-button"} onClick={(e)=>props.toggleForm(e)} >{props.showForm ? "Cancel" : "Add"} </button>
            </div>


            {props.images.length !== 0 ? (
            <div className="image-list">
                {props.images.map((image, index) => (
                    <div className="image-container">
                        <div className="edit-btn" onClick={() => props.editImg(image, index)}>
                            <img src={edit} alt="Edit" />
                        </div>
                        <div className="delete-btn" onClick={() => props.deleteImg(image)}>
                            <img src={deleteBtn} alt="Edit" />
                        </div>
                        <img src={image.url} className="image" alt={image.title} />
                        <span className="image-name"> {image.title} </span>
                    </div>
                ))}

            </div>

            ) : (
                <div className="No-Images-container"> 
                  <span className="No-Images">No Images in this Album</span>
                 </div>
            )}

        </div>
    )
}

export default ImageList;