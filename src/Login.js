import React from 'react';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

import { Button } from '@material-ui/core';

import './Login.css';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // Sign In
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });

                console.log(result.user);
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                    alt='Facebook Logo'
                />

                <img
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt='Facebook Text'
                />
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
