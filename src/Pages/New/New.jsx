import React from 'react'
import {useState} from 'react'
import "./new.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'

const New = ({inputs, title}) => {

const [file,setFile] = useState("");


  return (
    <div className='new'>
      <Sidebar/>

    </div>
  )
}

export default New