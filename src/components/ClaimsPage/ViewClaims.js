import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
// import EditPassenger from './EditPassenger';


export const ViewClaims = () => {

  const [data, setData] = useState([]);

// delete passengar function

  const deleteClaims = async (id) => {
    try{
const deleteClaims = await fetch(`http://localhost:3001/claims/${id}`, {
  method: "DELETE"
});
setData(data.filter(data => data.id !== id))
    }catch (err) {
console.error(err.message)
    }
  }

    const getClaims = async() =>{
      try{
        const response= await fetch 
        ('http://localhost:3001/claims');
        const jsonData = await response.json();
        setData(jsonData);
        
    }catch (err){
      console.error(err.message);
    }
  }
    useEffect(() => {
        getClaims();
    }, [])

    console.log({data})
  return (
    <Fragment>
        <h3 className='mt-5 text-center'>Claims List</h3>
        <table className="table table-hover mt-5 text-center">
    <thead>
      <tr>
        <th>Policy number</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>loss date</th>
        <th>loss description</th> 
        <th>amount</th>
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
          <td>{data?.policy_number}</td>
          <td>{data?.first_name}</td>
          <td>{data?.last_name}</td>
          <td>{data?.date_of_loss}</td>
          <td>{data?.loss_description}</td>
          <td>{data?.amount}</td>
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
