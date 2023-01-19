import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { AddMedicine, EditMedicine } from '../actions/medicines.action';

function ModelEdit({ show, setShow, data }) { 
    

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: data.id,
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
        }
        dispatch(EditMedicine(formData))
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
                            <Form.Control defaultValue={data.name} name="name" type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control defaultValue={data.quantity} name="quantity" type="number" placeholder="Enter Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control defaultValue={data.price} name="price" type="number" placeholder="Enter Price" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type='submit'>
                            Update
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModelEdit;