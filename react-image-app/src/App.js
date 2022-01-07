import React, { useState } from 'react';

const App = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

   const data = new FormData ()
    data.append("file", image)
    data.append("upload_preset", "Roundhouse")
    data.append("cloud_name", "newforce-cohort5")

  const uploadImage = () => {
   
    fetch("https://api.cloudinary.com/v1_1/newforce-cohort5/image/upload",
    {
      method:"post",
      body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setUrl(data.url)
    })
    .catch(err => console.log ("this is the error message", err))
    console.log("this is data", data)
  }

  const downloadImage = () => {

  }
  return (
    <div>
      <div>
        <input type="file" onChange = {(e)=> setImage(e.target.files[0])}></input>
        <button onClick={uploadImage}>Upload an image</button>
      </div>
      <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={url} alt="uploaded" width="400px"  />
          <h1>the download here</h1>
          <button onClick={downloadImage}>download</button>
          {/* <%= link_to("Download", cl_private_download_url("my_private_image", :jpg, :attachment => true)) %> */}
          
    </div>
    </div>
  );
}

export default App;
