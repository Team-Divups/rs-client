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