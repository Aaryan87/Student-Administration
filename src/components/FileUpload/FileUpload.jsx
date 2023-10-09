import React, { useState } from 'react';
import './FileUpload.css'

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const fileData = e.target.result;

        // Store the file data in local storage
        localStorage.setItem('uploadedFile', fileData);

        alert('File uploaded and stored in local storage.');
        setFile(null);
      };

      fileReader.readAsDataURL(file);
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <div className="container">
      <h1>Upload Your Assisginment Here</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {file && <p>Selected File: {file.name}</p>}
    </div>
  );
}

export default FileUpload;
