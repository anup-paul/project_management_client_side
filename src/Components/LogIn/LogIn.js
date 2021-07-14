import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LogIn = () => {

    const [loginData, setLoginData] = useState({});
    const handleLoginUpForm = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }


    let history = useHistory();
    const handleLoginButton = (e) => {
        e.preventDefault();
        console.log(loginData);
        fetch('http://localhost/project_management_api/public/api/login', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        })
            .then(res => {
                console.log(res);
                if(res.ok) {
                    //   localStorage.setItem("users", res.data) 
                      history.push("/projectManagement");
                }
                else{
                    console.log("error");
                }
                
                    
            })
    }

    return (
        <>
            <div className="mt-5" >
                <div className="d-flex justify-content-center" >
                    <form className="w-30 border p-5  shadow-lg p-3 mb-5 bg-body rounded "  >
                        <h2 className="text-center" >Login</h2>
                        <div>
                            <label for="validationCustom01" class="form-label">Email</label>
                            <input type="email" onBlur={handleLoginUpForm} name="email" class="form-control" id="validationCustom01" placeholder="Email" required />
                        </div>
                        <div >
                            <label for="validationPassword02" class="form-label">Password</label>
                            <input type="password" onBlur={handleLoginUpForm} name="password" class="form-control" id="validationPassword02" placeholder="Password"  required />
                        </div>
                        <div className="mt-2 mb-2" >
                            <button onClick={(e) => handleLoginButton(e)} class="btn btn-primary" type="submit"> Login </button>
                        </div>
                        <div>
                            <h6>Don't have an account <b><Link to="/signUp" >SignUp</Link></b></h6>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;