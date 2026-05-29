import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { setUser, createUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photoURL, email, password });
        createUser(email, password)
            .then((res) => {
                console.log(res.user);
                const user = res.user;
                setUser(user);
            })
            .catch((err) => {
                alert(err.message);
            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* name */}
                        <label className="label">Your Name</label>
                        <input name='name' type="text" className="input" placeholder="Enter your name" required />
                        {/* Photo */}
                        <label className="label">Photo URL</label>
                        <input name='photoURL' type="text" className="input" placeholder="Enter your photo URL" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Enter your email address" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Enter your pasword" required />
                        <p></p>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='font-semibold text-center mt-7'>Already Have An Account? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;