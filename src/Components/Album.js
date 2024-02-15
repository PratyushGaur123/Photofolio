import { useEffect, useState } from "react";
import AlbumForm from "./AlbumForm";
import AlbumList from "./AlbumList";
import { db } from "../firebaseInit";
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, orderBy, serverTimestamp } from "firebase/firestore";
import '../static/Album.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Album() {
    const [showForm, setShowForm] = useState(false);
    const [albumName, setAlbumName] = useState("");
    const [albums, setAlbums] = useState([]);
    const [albumIndex, setAlbumIndex] = useState(0);

    useEffect( ()=>{
        const unsub = onSnapshot(collection(db, "albums"), orderBy("index", "desc"), (snapshot)=>{
            const albums = snapshot.docs.map( (docSnap)=>{
                return {
                    id: docSnap.id,
                    ...docSnap.data()
                }
            });
            setAlbums(albums);
        });
    }, []);


    function toggleForm() {
        setShowForm(!showForm);
    }

    function clearInput(event) {
        event.preventDefault();
        setAlbumName("");
    }


    async function addAlbum(event) {
        event.preventDefault()
        await addDoc(collection(db, "albums"), {
            name: albumName,
            images: [],
        });
        console.log("Album added successfully in the database");
        toast.success("Album added successfully");
        setShowForm(!showForm);
        clearInput(event);
    }

    return (
        <>
            {showForm ? <AlbumForm albumName={albumName} clearInput={clearInput} setAlbumName={setAlbumName} addAlbum={addAlbum} /> : null}
            <AlbumList showForm={showForm} toggleForm={toggleForm} albums={albums} />
        </>
    )
}

export default Album;


/*

 */