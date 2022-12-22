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

  const data = useSelector((state) => state.updateMedicines)
  const addData = useSelector((state) => state.addMedicine)

  const dispatch = useDispatch();

  const incrementData = () => {
    dispatch(increment())
  }

  const decrementData = () => {
    dispatch(decrement())
  }

  const medicineModel = () => {
    setShow(true);
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete this data?")){
      dispatch(DeleteMedicine(id))
    }
  }

  const handleEdit = (data) => {
    setEshow(true);
    setEdata(data)
  }

  return (

    <div>

      <Model show={show} setShow={setShow} />
      <ModelEdit show={eshow} setShow={setEshow} data={Edata} />
      
      <br/>

      <Button variant="primary" onClick={medicineModel}>
        Add Medicine
      </Button>

      <br/><br/>

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
                    <IconButton aria-label="delete" color="error" onClick={()=>handleDelete(i.id)}> <DeleteIcon /></IconButton>
                    <IconButton aria-label="edit" color="primary" onClick={()=>handleEdit(i)}> <EditIcon /></IconButton></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

      <Button variant="outline-primary" onClick={incrementData}>+</Button>
      <span className='p-2'> {data} </span>
      <Button variant="outline-primary" onClick={decrementData}>-</Button>
    </div >
  );
}

export default Medicine;