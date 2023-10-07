import React, { useState } from "react";
import './SiginIn.css'

function SignIn() {

    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');

    const clickhandler = (e) => {
        e.preventDefault();
        setName('');
        setPwd('');
    }

    return(
        <div className="wrapper-form">
            <div className="container-form">
            <form onSubmit={clickhandler} >
                <label>Username</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                />
                <button>Sign In</button>
                <a href="#">Forgot Password?</a>
            </form>
            </div>
        </div>
    );
}

export default SignIn;