import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (<LoginScreen />) : 
      (
        <Switch>
        <Route path="/profile">
            <ProfileScreen />
        </Route>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        
        </Switch>
      )
      }
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
