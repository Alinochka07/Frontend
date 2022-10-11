import React, {useState, useEffect} from 'react'
import { storage } from "../index";
import { ref, uploadBytes, listAll } from "firebase/storage";
import {v4} from "uuid";
import firebase from 'firebase/compat/app';
import { getDownloadURL } from 'firebase/storage';



export default function UploadImages() {

    const [imageUpload, setImageUpload] = useState()
    const [imageList, setImageList] = useState([])

    const imageListRef = ref(storage, `tours-images/`)

    const uploadImage = () => {
        if (imageUpload === null) return;
        const imageRef = ref(storage, `tours-images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
        console.log(imageUpload.name)
    }

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <div className="mb-3">
            <label className="upload-photo" htmlFor="upload-image">Выбрать фото тура</label>
            <input className="" id="upload-image" type="file" 
            onChange={(e) => setImageUpload(e.target.files[0])}
            ></input>
            <button className='btn btn-outline-secondary' type='button' onClick={uploadImage}>Загрузить картинку</button>
            {/* <div className='images'>
                <ul className='images-list'>
                    {imageList.map((url) => {
                        return <li><img width='290px' height='350px' src={url}/></li>
                    })}
                </ul>
            </div> */}
        </div>
    )
}








