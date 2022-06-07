import React from 'react'
import './ListUser.scss'
import {userColumns} from './Userdata';
import { DataGrid } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios"
import {AddCircleOutline, Send } from '@mui/icons-material';


const ListUser = () => {

    const [userData,setUserData] = useState([ ]);

    //to get data when the application loads
    useEffect( () =>{
      axios.get("http://localhost:3003/user").then(
        (response)=>{
          setUserData(response.data);
        })
    },[])

    //to delete all
    const DeleteAll = (e) =>{
      e.preventDefault();
      axios.delete("http://localhost:3003/user");
    }

    const actionColumn = [{
        field:"action",
        headerName:"Action",
        width:200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to='/users/test' style={{textDecoration: 'none'}}>
                        <div className="viewButton"><PreviewOutlinedIcon/></div>
                    </Link>
                    <div className="editButton"><EditOutlinedIcon/></div>
                    <div className="deleteButton"  ><DeleteOutlineOutlinedIcon/></div>
                </div>
            )
        }
    }]

  return (
    <div className='dataTable'>
             <div className="dataTableTitle">
                 Overview of Users
             </div>

                  <span >
                        <Button  color="error" size="small" variant="contained" endIcon={<DeleteOutlineOutlinedIcon/>} onClick={DeleteAll}>
                          Delete
                        </Button>
                 </span>
             
                 <span style={{paddingLeft:'70%'}}>
                      <Link to='/users/new'  className="link">
                        <Button  size="small" variant="contained" endIcon={<AddCircleOutline/>} >Add</Button>
                      </Link>
                 </span>

                 <span style={{paddingLeft:'20px'}}>
                      <Link to='/users/invite'  className="link">
                        <Button  size="small" variant="contained" endIcon={<Send/>} >Invite </Button>
                      </Link>
                 </span>
              
              
        <DataGrid
            rows={userData}
            columns={userColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            style={{marginTop:'30px'}}
        />
    </div>
  )
}

export default ListUser