import React from 'react'
import "./chart.scss"
//import  { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      month: 'January',
      Total: 1240
    },
    {
      month: 'February',
      Total: 6000
    },
    {
      month: 'March',
      Total: 2400
    },
    {
      month: 'April',
      Total: 7600
    },
    {
      month: 'May',
      Total: 2000
    },
    {
      month: 'June',
      Total: 12000
    }
  ];


const Chart = ({aspect , title}) => {
  return (
    <div className='chart'>
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart width={730} height={250} data={data}
                 margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                    <XAxis dataKey="month" stroke='gray'/>
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                 <Tooltip />
                 <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart