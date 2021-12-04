import React, {useState} from 'react';

function ImageUpload(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
    const formData = new FormData();

		formData.append('selected-file', selectedFile);

		fetch(
			"http://localhost:8081/v1/file",
			{
				method: 'POST',
				body: formData,
        headers: new Headers({'content-type': 'multipart/form-data'}),
			}
		)
			.then((response) =>console.log(response))
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

	return(
   <div>
			<input type="file" name="image" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
          <img src={selectedFile} alt="This is your file" />
					<p>You selected file name : {selectedFile.name}</p>
					<p>with type of: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
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