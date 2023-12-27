import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
// import EditPassenger from './EditPassenger';


export const ViewNextOfKin = () => {

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
        <h3 className='mt-5 text-center'>Next of kin List</h3>
        <table className="table table-hover mt-5 text-center">
    <thead>
      <tr>
        <th>Next of Kin Name</th>
        <th>Next of Kin Phone</th>
        <th>Address</th>
        {/* <th>Edit</th>
        <th>Delete</th> */}
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
          <td>{data?.nextofkin_name}</td>
          <td>{data?.nextofkin_phone}</td>
          <td>{data?.nextofkin_address}</td>
          {/* <td>
            <EditPassenger data={data}/>
          </td> */}
          {/* <td><button className='btn btn-danger' onClick={() => deletePassenger(data.id)}>delete</button></td> */}
        </tr>
      ))}
    </tbody>
  </table>
    </Fragment>
  )
}
