import { Button } from '@mui/material';
import user from '../../Assets/user.png';

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img src={user} alt="" className="cellImg" />
                <b>{params.row.name}</b>
            </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'E-Mail',
      width: 200,
    },
    {
      field: 'designation',
      headerName: 'designation',
      width: 120,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 100,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => {
          return (
              <div>
                  {params.row.status === "joined" ? (
                     <Button variant="contained" color="success" size="small">Joined</Button>
                  ) : params.row.status === "invited" ? (
                     <Button variant="contained" color="secondary" size="small">Invited</Button>
                  ) : (
                     <Button variant="contained"  color="error" size="small">Declined</Button>
                  )}
              </div>
          )
        }
    },

]