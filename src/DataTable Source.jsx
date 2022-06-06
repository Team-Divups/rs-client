export const userRows =[
    {
        id: 1,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"active",
        email: "Jhonsnow@email.net",
        age: "25",
    },
    {
        id: 2,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"passive",
        email: "Jhonsnow@email.net",
        age: "25",
    },
    {
        id: 3,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"active",
        email: "Jhonsnow@email.net",
        age: "25",
    },
    {
        id: 4,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"idle",
        email: "Jhonsnow@email.net",
        age: "25",
    },
    {
        id: 5,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"passive",
        email: "Jhonsnow@email.net",
        age: "25",
    },
    {
        id: 6,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"passive",
        email: "Jhonsnow@email.net",
        age: "25",
    },{
        id: 7,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"idle",
        email: "Jhonsnow@email.net",
        age: "25",
    },{
        id: 8,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"idle",
        email: "Jhonsnow@email.net",
        age: "25",
    },{
        id: 9,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"active",
        email: "Jhonsnow@email.net",
        age: "25",
    },{
        id: 10,
        userName: 'John',
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        status:"active",
        email: "Jhonsnow@email.net",
        age: "25",
    },
]




export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 230,
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
      field: 'email',
      headerName: 'E-Mail',
      width: 250,
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 150,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 230,
        renderCell: (params) => {
          return (
              <div className={`statusCell ${params.row.status}`}>
                  {params.row.status}
              </div>
          )
        }
    },

]