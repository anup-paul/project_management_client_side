import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {

    const [signUpData, setSignUpData] = useState({});
    const handleSignUpForm = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        setSignUpData({...signUpData, [name]:value})
    }


    const history = useHistory()
    const handleSignUpButton = (e) =>{
        e.preventDefault();
        console.log(signUpData);
        fetch('http://localhost/project_management_api/public/api/register',{

            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(signUpData)
        })
        .then(res => {
            console.log(res);
            if(res.ok){
                history.push("/projectManagement");
            }
        })
    }

    return (
        <>
            <div className="mt-5" >
                <div className="d-flex justify-content-center" >
                    <form className="w-40 needs-validation border p-5 shadow-lg p-3 mb-5 bg-body rounded " >
                        <h2 className="text-center mb-3" > signUp</h2>
                        <div class="mb-3">
                            <label for="validationInputName1" class="form-label">Enter your Name</label>
                            <input type="text" onBlur={handleSignUpForm} name="name" class="form-control" placeholder="Enter your Name" id="validationInputName1" />

                        </div>
                        <div class="mb-3">
                            <label for="validationInputEmail1" class="form-label">Enter your Email address</label>
                            <input type="email" onBlur={handleSignUpForm} name="email" class="form-control" placeholder="Enter your email" id="validationInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="validationInputPassword1" class="form-label">Password</label>
                            <input type="password" onBlur={handleSignUpForm} name="password" class="form-control" placeholder="Enter your password" id="validationInputPassword1" />
                        </div>

                        <button onClick={(e)=>handleSignUpButton(e)}  type="submit" class="btn btn-primary mb-2">Sign Up</button>
                        <div>
                            <h6>Do you have an Account?</h6>
                            <h6>Click here for <b><Link to="/login" >LogIn</Link></b></h6>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;