import React from 'react'
import "./list.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Datatable from '../../Components/Datatable/Datatable'



const List = ({title}) => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <h1>{title}</h1>
        <Datatable/>
      </div>
    </div>
  )
}

export default List