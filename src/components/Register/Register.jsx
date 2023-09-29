import React from 'react';

const Register = () => {

    const handelRegister = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        console.log(email, password);
    }

    return (
        <div>
            <div className="m-5">
                <h2 className='text-2xl font-bold uppercase'>Please Register First</h2>
            </div>
            <form onSubmit={handelRegister} className=''>
                <input type="email" placeholder="Email Address" className="input input-bordered input-info w-full max-w-xs" />
                <br />
                <br />
                <input placeholder="Password" className='input input-bordered input-info w-full max-w-xs' type="password" name="password" id="" />
                <br />
                <br />
                <input className='btn btn-accent' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;