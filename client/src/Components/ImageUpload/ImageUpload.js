import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      {
        imagePathFromServer ? <p>{"Share your image with friends  " + imagePathFromServer}</p>  
          : <form encType="multipart/form-data">
            <input className="expiration--time--input" type="number" placeholder="Expiration time" min="1" onChange={(e) => setExpirationTime(e.target.value)} />
            <input type="file" name="image" onChange={handleFileSelection} />
          </form>
      }

      {isFilePicked ?
        <div>
          <p>You selected file name : {selectedFile.name}</p>
          <p>with type of: {selectedFile.type}</p>
        </div>

        : <p>Select a file to show details</p>
      }
      <div>
        <button onClick={uploadImage}>Submit</button>
      </div>

    </div>
  )
}

export default ImageUpload