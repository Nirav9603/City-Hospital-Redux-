import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data.json'

function DoctorDetails(props) {

    let { id } = useParams();

    let filterData = Data.find(d => d.id == id)

    console.log(filterData);

    return (
        <section id="doctors" className="d-doctors">
            <div className="container">
            <div className="section-title">
                        <h2>Doctor Details</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                <div className="col-12 row">
                    <div className="member d-flex">
                        <div className='col-6 d-doctor-align'>
                            <div className='pic'><img src="../assets/img/doctors/doctors-1.jpg" alt /></div>
                        </div>

                        <div className='col-6 d-doctor-align'>
                            <div className="member-info">
                                <h4>Name: {filterData.first_name} {filterData.last_name}</h4>
                                <apan className="doctor-text">Gender: {filterData.gender}</apan>
                                <apan className="doctor-text">IP Address: {filterData.ip_address}</apan>
                                <span>Email: {filterData.email}</span>
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
                </div>
            </div>
        </section >
    );
}

export default DoctorDetails;