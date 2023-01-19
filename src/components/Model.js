import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { AddMedicine } from '../actions/medicines.action';

function Model({ show, setShow  }) {

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 1000),
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
        }
        dispatch(AddMedicine(formData))
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
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control name="quantity" type="number" placeholder="Enter Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" type="number" placeholder="Enter Price" />
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

export default Model;