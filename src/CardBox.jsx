import React, { useState, useEffect } from 'react';
import { FaUpload } from 'react-icons/fa';
import "./CardBox.css"
import {HiDatabase} from "react-icons/hi"
import {MdAssignment} from "react-icons/md"
import {BsChatLeftDots} from "react-icons/bs"
import {TiAttachment} from "react-icons/ti"
import {CiCalendarDate} from "react-icons/ci"



const CardBox = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileCount, setFileCount] = useState(() => {
    // Get the file count from local storage, default to 0 if not available
    return parseInt(localStorage.getItem('fileCount')) || 0;
  });
  useEffect(() => {
    // Fetch file count from the backend
    fetch('/fileCount')
      .then(response => response.json())
      .then(data => {
        setFileCount(data.count);
        localStorage.setItem('fileCount', data.count); // Store count in local storage
      })
      .catch(error => console.error('Error fetching file count:', error));
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then(() => {
          setFileCount(prevCount => prevCount + 1);
          localStorage.setItem('fileCount', fileCount + 1); // Update local storage
        })
        .catch(error => console.error('Error uploading file:', error));
    }
  };



  return (
    <div className="cardbox">
        <div className='first-elmnt'>
          <div className='elmnt_1'>
            <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png" alt="img" />
            <p>Client Name</p>
            </div>
          <div className='elmnt_1'>
            <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png" alt="img" />
            <p>Client Name</p>
            </div>
        </div>
        <div className='second-elmnt first-elmnt'>
          <div className=' elmnt_1'>
            <HiDatabase/>
            <p>Lorem ipsum dolor sit amet... </p>
          </div>
          <div className='elmnt_2 elmnt_1'>
            <MdAssignment/>
            <p>1/2</p>
          </div>
         

        </div>
        <div className='third-elmnt'>
          <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png" alt="img" />
          <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png" alt="img" />
          <p>12+</p>
          <div className='elmnt_1'>
            <BsChatLeftDots/>
            <p>15</p>
          </div>
          <div className='elmnt_1'>
          <label>
          <input className='hide' type="file" onChange={handleFileChange} />
          <span className="icon">
          <TiAttachment/>
          </span>
          {selectedFile && <p>Selected File: {selectedFile.name}</p>}
        </label>
            
            <p> {fileCount}</p>
          </div>
          <div className='elmnt_1'>
            <CiCalendarDate/>
            <p>30-12-2022</p>
          </div>

          </div>

    </div>
  )
}

export default CardBox