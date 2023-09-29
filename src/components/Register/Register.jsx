import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/firebase.config';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [usercreated, setUserCreated] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [terms, setTerms] = useState(false);

    const handelRegister = (e) => {

        //check error
        setRegisterError('');
        setUserCreated('');

        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const terms = e.target[2].checked;
        console.log(email, password, terms);


        if (password.length < 6) {
            setRegisterError('Password Must be at least 6 Characters');
            return;
        } else if (!terms) {
            setRegisterError('Please Agree to the terms and conditions');
            return;
        }
        //create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUserCreated(userCredential.user);

                sendEmailVerification(userCredential.user)
                .then(() => {
                    alert('Please verify your email address')
                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch((error) => {
                setRegisterError(error.message);
            });
    }

    return (
        <div className=''>
            <div className="m-5">
                <h2 className='text-2xl font-bold uppercase'>Please Register First</h2>
            </div>
            <form onSubmit={handelRegister}>
                <div className="">
                    <input
                        required
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered input-info w-1/2" />
                    <br />
                    <br />
                    <div className="relative">
                        <input required
                            placeholder="Password"
                            className='relative input input-bordered input-info w-1/2'
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id=""
                        />

                        <span className='absolute top-4 right-60' onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                            }
                        </span>
                    </div>
                    <br />
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms" className='ml-2'>I agree to the terms and conditions</label>
                </div>
                <br />
                <br />
                <input className='btn btn-accent' type="submit" value="Register" />
            </form>

            {
                registerError && <p className='text-red-500'>{registerError}</p>
            }

            {
                usercreated && <p className='text-green-500'>User Created Successfully</p>
            }
        </div>
    );
};

export default Register;