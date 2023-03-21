import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { auth, provider } from '../config'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithPopup } from 'firebase/auth'

function Login() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    // const [password, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const Naviget = useNavigate()

    const submit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth , email, password)
        .then((userCredential) => {
            onAuthStateChanged(auth , async (user) => {
                if(user){
                    sendEmailVerification(user);
                }else{

                }
            });
        }) 
        .catch((error) => {
            console.log(error);
        })
    }



    return (
        <div className="App">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="padding col-md-4">
                        <form onSubmit={submit} className='color' id="loginform" >
                            <div className="form-group">
                                <p>
                                    <p className="center">
                                        Name
                                    </p>
                                    <input
                                        type="name"
                                        className="form-control"
                                        id="NameInput"
                                        name="NameInput"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter name"
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </p>

                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group">
                                <p>
                                    <p className="center-email">
                                        Enter email
                                    </p>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="EmailInput"
                                        name="EmailInput"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </p>

                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group">
                                <p>
                                    <p className="center-password">
                                        Password
                                    </p>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="InputPassword"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </p>
                                <small id="passworderror" className="text-danger form-text">
                                </small>
                            </div>
                            <div className="text-center"><button type="submit">Signup</button></div>
                            <p className="center-padding">
                                Already have an account? <a href="/auth">login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;