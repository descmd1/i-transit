import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import EditPassenger from './EditPassenger';
import { ViewNextOfKin } from '../components/PassengerProfile/ViewNextOfKin';
import { Link } from 'react-router-dom';


export const ViewPassenger = () => {

  const [data, setData] = useState([]);

// delete passengar function

  const deletePassenger = async (id) => {
    try{
const deletePassenger = await fetch(`http://localhost:3001/passengers/${id}`, {
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
        ('http://localhost:3001/passengers');
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
      <h3 className='mt-5 text-center'>List of Passengers</h3>
        <table className="table table-hover mt-5 text-center">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Edit</th>
        <th>Delete</th>
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
          <td>{data?.firstname}</td>
          <td>{data?.lastname}</td>
          <td>{data?.phone}</td>
          <td>{data?.address}</td>
          <td>
            <EditPassenger data={data}/>
          </td>
          <td><button className='btn btn-danger' onClick={() => deletePassenger(data.id)}>delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  <Link to="/view-nextofkin">  
  <button className='btn btn-primary'>View Next of Kin</button>
  </Link>

    </Fragment>
  )
}
