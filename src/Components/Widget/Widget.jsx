import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';



function Widget({type}) {
  let data;
  //temporary data
  const amount = 120
  const diff =20




  switch (type) {
    case "user":
      data = {
        title: "User",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon
        className='icon'
        style={{
          color: 'crimson',
          backgroundColor: '#fff',
        }}
        />
      };
      break;
      case "order":
      data = {
        title: "Order",
        isMoney: false,
        link: "See all orders",
        icon: <ShoppingCartOutlinedIcon
        className='icon'
        style={{
          color: 'goldenrod',
          backgroundColor: '#fff',
        }}
        />,
      };
      break;
      case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "View all earnings",
        icon: <MonetizationOnOutlinedIcon
        className='icon'
        style={{
          color: 'green',
          backgroundColor: '#fff',
        }}
        />,
      };
      break;
      case "balalnce":
      data = {
        title: "Balance",
        isMoney: true ,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon
        className='icon'
        style={{
          color: 'purple',
          backgroundColor: '#fff',
        }}
        />,
      };
      break;
      default:
        break;
  }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney  && "$"}
              {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon />
              {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget