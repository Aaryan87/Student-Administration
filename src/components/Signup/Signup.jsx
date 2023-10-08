import React, { useEffect, useState, useRef } from "react";     
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Signup.css'
import { Link } from "react-router-dom";

function Signup() {
    const user_regx = /^[A-z][A-z0-9-_]{3,23}$/;
    const pwd_regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const email_regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const userRef = useRef();

    const [user, setUser] = useState('');
    const [validname, setValidname] = useState(false);
    const[userfocus, setUserfocus] = useState(false);

    const[pwd, setPwd] = useState('');
    const[validpwd, setValidpwd] = useState(false);
    const[pwdfocus, setPwdfocus] = useState(false);

    const [matchpwd, setMatchpwd] = useState('');
    const [validmatch, setValidmatch] = useState(false);
    const [matchfocus, setMatchfocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validemail, setValidemail] = useState(false);
    const [emailfocus, setEmailfocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidname(user_regx.test(user));
    },[user]);

    useEffect(() => {
        setValidpwd(pwd_regx.test(pwd));
    });

    useEffect(() => {
        setValidpwd(pwd_regx.test(pwd));
        setValidmatch(pwd == matchpwd);
    });

    useEffect(() => {
        setValidemail(email_regx.test(email));
    })

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchpwd, email])

    const clickHandler = (e) => {
        e.preventDefault();
        setUser('');
        setPwd('');
        setMatchpwd('');
        setEmail('');

        const v1 = user_regx.test(user);
        const v2 = pwd_regx.test(pwd);

        if(!v1 || !v2){
            setErrMsg("Invalid Entry");
            return;
        }

    }


    return(
        <div className="wrapper-form1">
        <div className="container-form">
        {/* <h1>Sign Up</h1> */}
            <form onSubmit={clickHandler} className="Signup">
            <label htmlFor="username" >Username:
               <FontAwesomeIcon icon={faCheck} className={validname ? "valid" : "hide"} />
               <FontAwesomeIcon icon={faTimes} className={validname || !user ? "hide" : "invalid"} />
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={e => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validname ? false : true}
                aria-describedby="uidnote"
                onFocus={() => setUserfocus(true)}
                onBlur={() => setUserfocus(false)}
            />
            <p id="uidnote" className={user && userfocus && !validname ? "instruction" : "offscreen"} >
            <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="email" >Email:
               <FontAwesomeIcon icon={faCheck} className={validemail ? "valid" : "hide"} />
               <FontAwesomeIcon icon={faTimes} className={validemail || !email ? "hide" : "invalid"} />
            </label>
            <input
                type="text"
                id="email"
                autoComplete="off"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
                aria-invalid={validemail ? false : true}
                onFocus={() => setEmailfocus(true)}
                onBlur={() => setEmailfocus(false)}
            />
            <p className={email && !validemail && emailfocus ? "instruction" : "offscreen"} >
            <FontAwesomeIcon icon={faInfoCircle} />
               Wrong Email Address
            </p>

            <label htmlFor="pwd" >Password:
               <FontAwesomeIcon icon={faCheck} className={validpwd ? "valid" : "hide"} />
               <FontAwesomeIcon icon={faTimes} className={validpwd || !pwd ? "hide" : "invalid"} />
 
            </label>
            <input
                type="password"
                id="pwd"
                autoComplete="off"
                onChange={e => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validpwd ? false : true}
                onFocus={() => setPwdfocus(true)}
                onBlur={() => setPwdfocus(false)}
            />
            <p className={pwd && pwdfocus && !validpwd ? "instruction" : "offscreen"} >
            <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters:!, @, #, $, %
            </p>
            <label htmlFor="match">Confirm Password:
               <FontAwesomeIcon icon={faCheck} className={validmatch && matchpwd ? "valid" : "hide"} />
               <FontAwesomeIcon icon={faTimes} className={validmatch || !matchpwd ? "hide" : "invalid"} />
 
            </label>
            <input
                type="password"
                id="match"
                autoComplete="off"
                onChange={e => setMatchpwd(e.target.value)}
                value={matchpwd}
                required
                aria-invalid={validmatch ? false : true}
                onFocus={() => setMatchfocus(true)}
                onBlur={() => setMatchfocus(false)}
            />
            <p className={matchpwd && matchfocus && !validmatch ? "instruction" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>


            <button type="Submit" disabled={!validname || !validpwd || !validmatch ? true : false} >Sign Up</button>
              <Link to="/signin">
              <a >already have account?</a>
              </Link>
               <a href="#">forgot password?</a>
            </form>
               
            </div>
        </div>
    );

}

export default Signup;