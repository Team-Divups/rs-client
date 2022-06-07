import React from 'react'
import "./ListUser.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ListUser from './ListUser'


const UserList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <ListUser/>
      </div>
    </div>
  )
}

export default UserList