import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">

                        {/* name */}
                        <label className="label">Your Name</label>
                        <input type="email" className="input" placeholder="Enter your name" />
                        {/* Photo */}
                        <label className="label">Photo URL</label>
                        <input type="email" className="input" placeholder="Enter your photo URL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Enter your email address" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Enter your pasword" />
                        <p></p>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='font-semibold text-center mt-7'>Already Have An Account? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;