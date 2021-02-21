import React from 'react'
import NavBar from '../NavBar';
import PlanScreen from './PlanScreen';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import './ProfileScreen.css';
import { auth } from '../firebase';
const ProfileScreen = () => {
    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <NavBar />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>  
                <div className='profileScreen_info'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='netflix avatar'/>
                <div className='profileScreen_details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen_plans'>
                    <h3>Plans (Current Plan: premium)</h3>
                    <PlanScreen />
                        <button onClick={() => auth.signOut()} 
                        className='profileScreen_signOut'>Sign Out</button>
                    </div>
                </div>
                </div>
            </div>
            <div className='payments'>
            *Please use the following test credit card for payments*
            <br />
            5555 5555 5555 4444  -  Exp: 09/22  -  CVV: 123
        </div>
        </div>
    )
}

export default ProfileScreen;
