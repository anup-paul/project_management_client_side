import React from 'react';

const LogIn = () => {
    return (
        <div className="d-flex justify-content-center" >
            <form className="w-25"  >
                <div>
                    <label for="validationName01" class="form-label">Name</label>
                    <input type="text" class="form-control" id="validationName01"  required />
                </div>
                <div >
                    <label for="validationPassword02" class="form-label">Password</label>
                    <input type="text" class="form-control" id="validationPassword02" required />
                </div>
               <div >
                    <button class="btn btn-primary" type="submit"> Login </button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;