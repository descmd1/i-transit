import React, { Fragment, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const EditPassenger = ({ data }) => {
  const [passenger, setPassenger] = useState(data.passenger);

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const updatePassenger = async(e) => {
    e.preventDefault();
    try {
        const body = { passenger };
        const response = await fetch(`http://localhost:3001/passengers/${data.id}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(body)
        });
        window.location = "/"
    } catch (err) {
        console.error(err.message)
    }
  }
  return (
    // <Fragment>
    //   <button
    //     type="button"
    //     className="btn btn-warning"
    //     data-toggle="modal"
    //     data-target={`#id${data.id}`}
    //     onClick={() => setPassenger(data.passenger)}
    //   >
    //     Edit
    //   </button>

    //   <div className="modal" id={`id${data.id}`}>
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h4 className="modal-title">Edit passenger</h4>
    //           <button type="button" className="close" data-dismiss="modal"
    //           onClick={() => setPassenger(data.passenger)}>
    //             &times;
    //           </button>
    //         </div>

    //         <div className="modal-body">
    //           <input type="text" className="form-control" value={passenger} onChange={e => setPassenger(e.target.value)}/>
    //         </div>

    //         <div className="modal-footer">
    //           <button
    //             type="button"
    //             className="btn btn-warning"
    //             data-dismiss="modal"
    //             onClick={e => updatePassenger(e)}
    //           >
    //             Edit
    //           </button>
    //           <button type="button" className="btn btn-danger" data-dismiss="modal"
    //           onClick={() => setPassenger(data.passenger)}>
    //             Close
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>

    <>
    <MDBBtn onClick={toggleShow}>Edit</MDBBtn>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1' id={`id${data.id}`}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Edit Passenger</MDBModalTitle>
            {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow} */}
            <MDBBtn className='btn-close' color='none' 
            onClick={() => setPassenger(data.passenger)}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
          <input type="text" className="form-control" value={passenger} onChange={e => setPassenger(e.target.value)}/>
          </MDBModalBody>

          <MDBModalFooter>
            {/* <MDBBtn color='secondary' onClick={toggleShow}> */}
            <MDBBtn color='secondary' onClick={() => setPassenger(data.passenger)}>
              Close
            </MDBBtn>
            <MDBBtn
            onClick={e => updatePassenger(e)}
            >Edit</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </>
  );
};

export default EditPassenger;
