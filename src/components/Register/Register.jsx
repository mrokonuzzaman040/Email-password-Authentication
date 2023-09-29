import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/firebase.config';

const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const [usercreated, setUserCreated] = useState('')

    const handelRegister = (e) => {

        //check error
        setRegisterError('');
        setUserCreated('');

        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        console.log(email, password);


        if (password.length < 6) {
            setRegisterError('Password Must be at least 6 Characters');
            return;
        }
        //create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUserCreated(userCredential.user);
            })
            .catch((error) => {
                setRegisterError(error.message);
            });
    }

    return (
        <div>
            <div className="m-5">
                <h2 className='text-2xl font-bold uppercase'>Please Register First</h2>
            </div>
            <form onSubmit={handelRegister} className=''>
                <input required type="email" placeholder="Email Address" className="input input-bordered input-info w-full max-w-xs" />
                <br />
                <br />
                <input required placeholder="Password" className='input input-bordered input-info w-full max-w-xs' type="password" name="password" id="" />
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