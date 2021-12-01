import './Imageupload.css'

const ImageUpload = (props) => {
  return <div className="image-upload-container">
    <input type="file"  label='Upload'/>
    <input className="input__expiration-time" type="number"  placeholder="Expiration time" />
    <button>Upload Image</button>

  </div>
} 

export default ImageUpload;