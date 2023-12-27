import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
// import EditPassenger from './EditPassenger';


export const ViewStation = () => {

  const [data, setData] = useState([]);

// delete passengar function

  const deleteStation = async (id) => {
    try{
const deleteStation = await fetch(`http://localhost:3001/station/${id}`, {
  method: "DELETE"
});
setData(data.filter(data => data.id !== id))
    }catch (err) {
console.error(err.message)
    }
  }

    const getPassenger = async() =>{
      try{
        const response= await fetch 
        ('http://localhost:3001/station');
        const jsonData = await response.json();
        setData(jsonData);
        
    }catch (err){
      console.error(err.message);
    }
  }
    useEffect(() => {
        getPassenger();
    }, [])

    console.log({data})
  return (
    <Fragment>
        <table className="table table-hover mt-5 text-center">
    <thead>
      <tr>
        <th>ParkName</th>
        <th>City</th>
        <th>Destination</th>
        <th>Number of Passengers</th>
        <th>Bus capacity</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {data.map(data =>(
        <tr key={data.id}>
          <td>{data?.park_name}</td>
          <td>{data?.city}</td>
          <td>{data?.destination}</td>
          <td>{data?.number_of_passengers}</td>
          <td>{data?.bus_capacity}</td>
          <td>{data?.date}</td>
          <td>
            {/* <EditPassenger data={data}/> */}
            <button className='btn btn-warning'>edit</button>
          </td>
          <td><button className='btn btn-danger' onClick={() => deleteStation(data.id)}>delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
    </Fragment>
  )
}
