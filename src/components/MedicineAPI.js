import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalApi from './Modal/ModalApi';
import EditModalApi from './Modal/EditModalApi'

function MedicineAPI(props) {

    const [data, setdata] = useState([]);
    const [show, setShow] = useState(false);
    const [eshow, setEshow] = useState(false)
    const [Edata, setEdata] = useState({})

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        const api = `${process.env.REACT_APP_BASE_URL}/medicine`

        axios(
            {
                method: "GET",
                url: api
            }
        ).then((res) => {
            setdata(res.data)
        })
    }

    const handleModalOpen = () => {
        setShow(true)
    }

    const handleDelete = (id) => {
        const api = `${process.env.REACT_APP_BASE_URL}/medicine/${id}`

        axios(
            {
                method: "DELETE",
                url: api
            }
        ).then((res) => getData())
    }

    const handleEdit = (data) => {
        setEshow(true);
        setEdata(data)
      }

    return (
        <div className='container'>

            <ModalApi show={show} setShow={setShow} callBack={getData}/>
            <EditModalApi show={eshow} setShow={setEshow} data={Edata} callBack={getData}/>
            <div className='justify-content-center d-flex my-3'>
                <Button onClick={handleModalOpen} className='m-auto' variant="primary">Add Medicine</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i) => {
                            return (
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.quantity}</td>
                                    <td>{i.price}</td>
                                    <td><Button variant="danger" onClick={() => handleDelete(i.id)}>Delete</Button> <Button variant="primary" onClick={() => handleEdit(i)}>Edit</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>

    );
}

export default MedicineAPI;