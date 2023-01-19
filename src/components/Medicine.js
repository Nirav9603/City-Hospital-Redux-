import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, DeleteMedicine, EditMedicine, increment } from '../actions/medicines.action';
import Model from './Model';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import ModelEdit from './ModelEdit';


function Medicine() {

  const [show, setShow] = useState(false)
  const [eshow, setEshow] = useState(false)
  const [Edata, setEdata] = useState({})
  
  const addData = useSelector((state) => state.addMedicine.data)

  console.log(addData);

  const dispatch = useDispatch();

  const medicineModel = () => {
    setShow(true);
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this data?")) {
      dispatch(DeleteMedicine(id))
    }
  }

  const handleEdit = (data) => {
    setEshow(true);
    setEdata(data)
  }

  const stock = addData.length;


  return (
 
    <div>

      <Model show={show} setShow={setShow} />
      <ModelEdit show={eshow} setShow={setEshow} data={Edata} />

      <br />
      <div className='justify-content-center d-flex mb-3'>
        <Button variant="primary" onClick={medicineModel}>
          Add Medicine
        </Button>
      </div>
      <div className='justify-content-center d-flex'>
        <h3> Total Stock: {stock}</h3>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            addData.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>
                    <IconButton aria-label="delete" color="error" onClick={() => handleDelete(i.id)}> <DeleteIcon /></IconButton>
                    <IconButton aria-label="edit" color="primary" onClick={() => handleEdit(i)}> <EditIcon /></IconButton></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div >
  );
}

export default Medicine;