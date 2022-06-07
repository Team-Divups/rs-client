import React from 'react'
import {useState} from 'react'
import "./NewUser.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';


const InviteUser = ({inputs, title}) => {

const [file,setFile] = useState("");


const AddUser = async (e) =>{
  alert("Hi");
};

  return (
    <div className='new'>
      <Sidebar/>
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1 className="title">{title}</h1>
      </div>
      <div className="bottom">

        <div className="left">
          <img 
            src={file ?
              URL.createObjectURL(file) 
              :"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} 
            alt="profile" 
            className='userImg'
          />
        </div>


        <div className="right">
          <form onSubmit={AddUser}>
            {inputs.map((input) => {
              return (
                <div className="formInput" key={input.id}>
                  <label htmlfor={input.value}>{input.label}</label>
                  <input 
                    type={input.type} 
                    placeholder={input.placeholder}
                  />
                </div>
              )
            })}


            <div className="formInput">
              <label htmlFor='file'>
                Image: <DriveFolderUploadOutlinedIcon className='icon'/>
              </label>
              <input type="file" id='file' style={{display:'none'}} onChange={e=> setFile(e.target.files[0])} />
            </div>

            <div style={{ paddingLeft: '80%'}}>
              <button type='submit'>Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    </div>
  )
}

export default InviteUser