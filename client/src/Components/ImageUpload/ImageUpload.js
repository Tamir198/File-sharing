import React, { useState } from 'react';
import axios from 'axios';

import './imageupload.css'

import copyToClipboard from '../../Utils/copyToClipboard'

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [imagePathFromServer, setImagePathFromServer] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [expirationTime,setExpirationTime] = useState(1);

  const handleFileSelection = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post('http://localhost:8081/v1/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'expirationTime': expirationTime
      }
    }).then((response) => {
      setImagePathFromServer(response.data);
    })
  };

  return (
    <div className="file--chose-container">
      {
        imagePathFromServer ? <div>
         <p>{"Share your image with friends  " + imagePathFromServer}</p>
          <button onClick={copyToClipboard(imagePathFromServer)}>Copy</button>
        </div> 
    
       
          : <form encType="multipart/form-data">
            <input type="number" placeholder="Expiration time" min="1" onChange={(e) => setExpirationTime(e.target.value)} />
            <input type="file" name="image" onChange={handleFileSelection} />
          </form>
      }

      {isFilePicked ?
        <div>
          <h2>selected file name : {selectedFile.name}</h2>
          <h4>File type : {selectedFile.type}</h4>
        </div>
        : <p>Select a file to show details</p>
      }
        <button onClick={uploadImage}>Submit</button>

    </div>
  )
}

export default ImageUpload