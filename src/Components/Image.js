import { useEffect, useState } from "react";
import { db } from "../firebaseInit";
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import '../static/Image.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import back from "../static/back.png";


function Image(props) {

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [images, setImages] = useState([]);
    const [edit, setEdit] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);

    useEffect( ()=>{
            const unsub = onSnapshot(doc(db, "albums", props.openAlbum.album.id), (snapshot) => {
                const images = snapshot.data().images;     
                setImages(images);
            });
    }, []);

    function toggleForm(event) {
        setShowForm(!showForm);
        clearInput(event);
        setEdit(!edit);
    }

    async function deleteImg(image){
        const albumId = props.openAlbum.album.id;
        const albumRef = doc(db, "albums", albumId);
        await updateDoc(albumRef, {
            images: arrayRemove(image)
        });
        // console.log("Image deleted successfully");
        toast.success("Image deleted successfully");
    }

    async function handleUpdateImage(event){
        event.preventDefault();
        const albumId = props.openAlbum.album.id;

        // Create a new image object with the updated title and url
        const newImage = {title: title, url: url};

        // Replace the current image object in the images array with the new image object
        images.splice(updateIndex, 1, newImage);

        // Get a reference to the album document in Firestore
        const docRef = doc(db, "albums", albumId);

        // Update the images field of the album document with the modified images array
        await updateDoc(docRef, {images: images});
        clearInput(event);
        setShowForm(!showForm);
        toast.success("Image updated successfully");
        setShowForm(!showForm);

    }

     function editImg(image, index){
        setShowForm(!showForm);
        setTitle(image.title);
        setUrl(image.url);
        setEdit(!edit);
        setUpdateIndex(index);
    }

    function clearInput(event) {
        event.preventDefault();
        setTitle("");
        setUrl("");
    }

    async function addImage(event) {
        event.preventDefault()
        const albumId = props.openAlbum.album.id;
        const image = {
            title: title,
            url: url
        };
        const albumRef = doc(db, "albums", albumId);
        await updateDoc(albumRef, {
            images: arrayUnion(image)
        });
        toast.success("Image added successfully");
        clearInput(event);
        setShowForm(!showForm);
    }

    function handleBack(){
        props.setOpenAlbum(!props.openAlbum.open);
    }



    return (
        <>
           <span className="back-container" onClick={handleBack}>
             <img src={back} alt="back" className="back-img" />
           </span>
           {showForm ? <ImageForm title={title} setTitle={setTitle} url={url} setUrl={setUrl} clearInput={clearInput} openAlbum={props.openAlbum} addImage={addImage} edit={edit} editImg={editImg} handleUpdateImage={handleUpdateImage} /> : null}
           <ImageList toggleForm={toggleForm} showForm={showForm} openAlbum={props.openAlbum} images={images} deleteImg={deleteImg} editImg={editImg} /> 
        </>

    )
}

export default Image;


/*        // const imagesRef = collection(doc(db, "albums", props.openAlbum.album.id), "images")
        // const unsub = onSnapshot(doc(db, "albums", props.openAlbum.album.id), (snapshot)=>{
        //     if (snapshot.docs) {
        //         const images = snapshot.docs.map( (docSnap)=>{
        //             return {
        //                 // id: docSnap.id,
        //                 ...docSnap.data()
        //             }

        //         });
        //         console.log(images);
        //         setImages(images);
        //     }
        // });
    
 */
