import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const MyTable = () => {
    const rows = [
        {   
            id: 1145872,
            product: 'Product 1',
            img: "https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFWY0xDMEcxM0wuX0FDX1NMMTUwMF8uanBn.jpg",
            customer : "John Baiden",
            date: "12/12/2019",
            price: 100,
            method: "Cash on Delivery",
            status: "Delivered"
        },
        {   
            id: 1254872,
            product: 'Product 1',
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418600_sd.jpg",
            customer : "John Baiden",
            date: "12/12/2019",
            price: 100,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {   
            id:1785872,
            product: 'Product 1',
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418600_sd.jpg",
            customer : "John Baiden",
            date: "12/12/2019",
            price: 100,
            method: "Cash on Delivery",
            status: "Cancelled"
        },
        {   
            id:2545872,
            product: 'Product 1',
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418600_sd.jpg",
            customer : "John Baiden",
            date: "12/12/2019",
            price: 100,
            method: "Cash on Delivery",
            status: "Delivered"
        },
        {   
            id:1335872,
            product: 'Product 1',
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418600_sd.jpg",
            customer : "John Baiden",
            date: "12/12/2019",
            price: 100,
            method: "Cash on Delivery",
            status: "Pending"
        },
      ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>ID</TableCell>
            <TableCell className='tableCell'>Productuct</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Price</TableCell>
            <TableCell className='tableCell'>Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
        
              <TableCell className='tableCell' >{row.id}</TableCell>
              <TableCell className='tableCell' >
                  <div className="cellWrapper">
                      <img src={row.img} alt="" className='image'/>
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className='tableCell' >{row.customer}</TableCell>
              <TableCell className='tableCell' >{row.date}</TableCell>
              <TableCell className='tableCell' >{row.price}</TableCell>
              <TableCell className='tableCell' >{row.method}</TableCell>
              <TableCell className='tableCell' >
                  <span className={`status ${row.status}`}>
                        {row.status}
                  </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;