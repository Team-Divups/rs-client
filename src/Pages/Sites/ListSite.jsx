import React from 'react'
import './ListSite.scss'
import { siteColumns } from './SiteData';
import { DataGrid } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios"


const ListSite = () => {

    const [siteData,setSiteData] = useState([ ]);

    //to get data when the application loads
    useEffect( () =>{
      axios.get("http://localhost:3003/site").then(
        (response)=>{
          setSiteData(response.data);
        })
    },[])

  
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
                 Overview of Sites
             </div>
            
              <Link to='/users/new'  className="link">
                  <Button style={{flex:0.5,marginTop:'-100px'}}>Add + </Button>
              </Link>

            
              
        <DataGrid
            rows={siteData}
            columns={siteColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
  )
}

export default ListSite