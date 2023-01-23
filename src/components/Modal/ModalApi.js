import { NewspaperRounded } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addMethod } from 'yup';

function ModalApi({ show, setShow, callBack }) {

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 100),
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value
        }

        const api = `${process.env.REACT_APP_BASE_URL}/medicine`

        axios(
            {
                method: "POST",
                url: api,
                data : formData
            }
        ).then((res) => {
            callBack()
        })

        
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="quantity"
                                name="quantity"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="price"
                                name="price"
                            />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Add
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModalApi;