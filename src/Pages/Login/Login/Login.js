import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'


//added for redirect --------------
import { useHistory, useLocation } from 'react-router-dom'



//login page
const Login = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, toggleLogin, isLogin, handleResetPassword, handleNameChange } = useAuth();


    //added for redirect----------------
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {

                history.push(url)
            })
    }

    return (
        //  google sign in part 
        
        <div className="mx-5 mt-5 login-form my-5">
            <button onClick={handleGoogleLogin} className="search-btn my-5">Google Sign In</button>
            <br />
            <div><h4><strong>-----------OR----------</strong></h4></div>
            <br />

             {/* email & password sign in part */}
            <form onSubmit={handleRegistration}>
                <h3 className="login-header text-center">Please {isLogin ? 'Login' : 'Register'} </h3>
                {!isLogin && <div className="row w-50 mx-auto mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label form-input">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Enter Your Name" />
                    </div>
                </div>}
                <div className="row w-50 mx-auto mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-input">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Enter Valid Email" required />
                    </div>
                </div>

                <div className="row w-50 mx-auto mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label form-input">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Enter Your Password" required />
                    </div>
                </div>

                <div className="row w-50 mx-auto mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />

                            <label className="form-check-label" htmlFor="gridCheck1">
                                <strong>Already Have an Account?</strong>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="search-btn me-4">{isLogin ? 'Login' : 'Register'}</button>
                <button type="button" onClick={handleResetPassword} className="search-btn ">Reset Password</button>
            </form>

        </div>
    );
};

export default Login;