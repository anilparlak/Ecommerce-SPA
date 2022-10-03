import React from 'react'
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm ';
import {signInWithGooglePopup , createUserDocumentFromAuth,} from "../../utils/firebase/Firebase";
import "./authentication.scss"
const Authentication = () => {
    // const loginGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication