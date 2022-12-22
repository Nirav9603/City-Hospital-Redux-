import React from 'react';
import { useNavigate } from 'react-router-dom';
import Data from './Data.json'

function Doctor(props) {

    const nevigate = useNavigate();

    const handleDeatils = (id) => {
        nevigate(`/doctor/${id}`)
    }

    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                    <div className="row">

                        {
                            Data.map((d) => {

                                return (
                                    <div className="col-lg-6" onClick={() => handleDeatils(d.id)}>
                                        <div className="member d-flex align-items-start">
                                            <div className="pic"><img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt /></div>
                                            <div className="member-info">
                                                <h4>{d.first_name} {d.last_name}</h4>
                                                <span>{d.email}</span>
                                                <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</p>
                                                <div className="social">
                                                    <a href><i className="ri-twitter-fill" /></a>
                                                    <a href><i className="ri-facebook-fill" /></a>
                                                    <a href><i className="ri-instagram-fill" /></a>
                                                    <a href> <i className="ri-linkedin-box-fill" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        </div>

    );
}

export default Doctor;