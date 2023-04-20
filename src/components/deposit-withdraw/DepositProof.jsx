import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import './deposit-withdraw.css';

const DepositProof = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

  
  const fileInputRef = React.createRef();

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    previewFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    previewFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
  };


    return(
        <>
        <Navbar/>
            <div className="deposit-proof">
                <div className="container mt-4">
                    <h1 className="text-center">Deposit Bitcoin</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-10 my-4 mx-auto">
                            <form action="Not working yet" method="post">
                            <div
                                className="image-uploader form-div mx-auto text-center " 
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileInputChange}
                                    style={{ display: "none" }}/>
                                <div
                                    className="image-preview align-middle m-auto"
                                    onClick={() => fileInputRef.current.click()} >
                                    {previewUrl ? (
                                    <img src={previewUrl} alt="Preview" />
                                    ) : (
                                    <span className="text-white align-middle my-auto">Drop or click to select image</span>
                                    )}
                                </div>
                            </div>
                            <div className="mt-3 text-end">
                            <button className="mx-auto btn-blue border-0 px-5">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          <Footer/>
        </>
    );
}
export default DepositProof;