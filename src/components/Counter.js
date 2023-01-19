import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrementcounter, incrementcounter } from '../actions/counter.action';

function Counter(props) {

    const data = useSelector((state) => state.CounterData)

    const dispatch = useDispatch();

    const incrementData = () => {
        dispatch(incrementcounter())
    }

    const decrementData = () => {
        dispatch(decrementcounter())
    }

    return (
        <div className='my-5'>
            <div className="container">
                <div className="section-title">
                    <h2>Counter</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>

                <div className='section-title'>
                    <Button variant="outline-primary" onClick={incrementData}>+</Button>
                    <span className='p-2'> {data} </span>
                    <Button variant="outline-primary" onClick={decrementData}>-</Button>
                </div>
            </div>
        </div>
    );
}

export default Counter;