import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm ';
import { UserContext } from '../../contexts/user';

import "./authentication.scss"
const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(()=>{
    currentUser && navigate("/")
  },[currentUser])
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication