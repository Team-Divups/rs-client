import React from 'react'
import "./new.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'



const New = ({inputs, title}) => {



  return (
    <div className='new'>
      <Sidebar/>
    <div className="newContainer">
      <Navbar/>
      
    </div>

    </div>
  )
}

export default New