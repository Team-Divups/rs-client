import React from 'react'
import './datatable.scss'
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../DataTable Source';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import { Link } from 'react-router-dom';




const Datatable = () => {

    const [data,setData] = useState(userRows);


    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

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
                    <div className="deleteButton"  onClick={() => handleDelete(params.row.id)}><DeleteOutlineOutlinedIcon/></div>
                </div>
            )
        }
    }]
  return (
    <div className='dataTable'>
        <div className="dataTableTitle">
            Add new user
            <Link to='/users/new'  className="link">
                Add New +
            </Link>
        </div>
        <DataGrid
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
  )
}

export default Datatable