import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    console.log(selectedFile);

    axios.post('http://localhost:8081/v1/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then( (response) => {console.log(response.data);
  })
  };


  return (
    <div>
      <form encType="multipart/form-data" action="">
        <input type="file" name="image" onChange={changeHandler} />
      </form>
      {/* <input type="file" name="image" onChange={changeHandler} /> */}
      {isFilePicked ? (
        <div>
          <p>You selected file name : {selectedFile.name}</p>
          <p>with type of: {selectedFile.type}</p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  )
}

export default ImageUpload