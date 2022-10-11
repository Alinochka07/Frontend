import React, { useState, useEffect } from "react";
import "./App.css";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./pages/account/AuthContext";
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import { auth } from "./index";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import HomePage from "./pages/homePage";
import SignUp from "./pages/account/signUp"
import SignIn from "./pages/account/signIn";
import VerifyEmail from "./pages/account/verifyEmail";
import Profile from "./pages/account/profilePage";
import PrivateRoute from "./pages/account/PrivateRoute";
import Navbar from "./components/navbar/navbar";

import ToursApp from "./pages/tours-page/tours";
import TourDetails from "./pages/tours-page/tour-details";
import Tours from "./pages/tours-page/tours";
import AdminCreateTour from "./pages/adminCreateTour";
import AllPopularDestinations from "./pages/tours-page/allpopulardestinations";
import SearchPage from "./pages/searchPage";


export default function App() {

    const [currentUser, setCurrentUser] = useState([]);
    const [timeActive, setTimeActive] = useState(false);
    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
        })
      }, []);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if(currentUser){
    //           setCurrentUser(user);
    //         }
    //         else{
    //           setCurrentUser(false);
    //         }
    //       })
    // }, [])

        return(

            // <Router>
                <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
                    <Navbar/>
                    <Routes>
                        <Route exact path='/profile' element={
                            <PrivateRoute>
                                <Profile/>
                            </PrivateRoute>
                        }/>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route path="/login" element={
                            !currentUser ? <SignIn/> : <Navigate to='/register'/>
                            
                        } />
                        <Route path="/register" element={
                            
                            !currentUser ? <SignUp/> : <Navigate to='/'/>
                        } />
                        <Route path='/verify-email' element={<VerifyEmail/>} /> 
                        {/* <Route path='/tours' element={<Tours/>} /> */}
                        <Route path='/tour/:id' element={<TourDetails/>} />
                        <Route exact path='/admin/create' element={<AdminCreateTour/>}/>
                        <Route path='/all-popular-destinations' element={<AllPopularDestinations/>}/>
                        <Route path='/results' element={<SearchPage/>}/>
                        
                    </Routes>
                </AuthProvider>
            // </Router>
            
        )
    }


