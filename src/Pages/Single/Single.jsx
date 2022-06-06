import React from 'react'
import "./single.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chart from '../../Components/Chart/Chart'
import MyTable from '../../Components/Table/Table'





const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className="item">
              <img src="https://qa-dental.co.uk/wp-content/uploads/2017/02/avatar-man.png" 
                alt="profile"  
                className="itemImg" 
              />
              <div className="details">
                <h1 className='itemTitle'>Michaesl Kros</h1>
                <div className="detailItem">
                  <sapn className="itemKey">Emai:</sapn>
                  <sapn className="itemValue">krosinfo@gmail.com</sapn>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Phone:</sapn>
                  <sapn className="itemValue">+01 12882 1231</sapn>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Address:</sapn>
                  <sapn className="itemValue">Maty Avnue, Zelda place , Los Angels</sapn>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Country:</sapn>
                  <sapn className="itemValue">USA</sapn>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (last 6 months)"/>

          </div>
        </div>
        <div className="bottomSingle">
        <h1 className='title'>Last Transactions</h1>
          <MyTable/>
        </div>
      </div>

    </div>
  )
}

export default Single