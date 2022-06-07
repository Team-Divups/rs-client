export const siteColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'site',
      headerName: 'Site',
      width: 300,
      renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img src={params.row.img} alt="" className="cellImg" />
                {params.row.userName}
            </div>
        )
      }
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'type',
      headerName: 'Category',
      width:120,
    },
    {
      field: 'owner',
      headerName: 'Owner',
      width: 120,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 100,
    },
    {
    field: 'description',
    headerName: 'Description',
    width: 200,
    },

]