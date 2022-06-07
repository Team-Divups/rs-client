import React from 'react'
import "./ListSite.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ListSite from './ListSite';

const SiteList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
          <ListSite/>
      </div>
    </div>
  )
}

export default SiteList