// import React, { useState, useEffect } from "react";
// import "./app.css";
// import { AuthProvider } from "../user-modal/AuthContext";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { auth } from "../user-modal/firebase";
// import {onAuthStateChanged} from 'firebase/auth';
// import {Navigate} from 'react-router-dom';
// import HomePage from "../../pages/homePage";
// import SignUp from "../user-modal/signUp";
// import SignIn from "../user-modal/signIn";
// import VerifyEmail from "../user-modal/verifyEmail";
// import Profile from "../user-modal/userProfile";
// import PrivateRoute from "../user-modal/PrivateRoute";
// import Navbar from "../../pages/navbar";


// export default function App() {

//     const [currentUser, setCurrentUser] = useState([]);
//     const [timeActive, setTimeActive] = useState(false);

//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if(currentUser){
//               setCurrentUser(user);
              
//             }
//             else{
//               setCurrentUser(false);
//             }
//           })
//     })

//         return(

//             <Router>
//                 <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
//                     <Navbar/>
//                     <Routes>
//                         <Route exact path='/profile' element={
//                             <PrivateRoute>
//                                 <Profile/>
//                             </PrivateRoute>
//                         }/>
//                         <Route exact path="/" element={<HomePage/>}/>
//                         <Route path="/login" element={
//                         !currentUser?.emailVerified ? <SignIn/> : <Navigate to='/' replace/>
//                         } />
//                         <Route path="/register" element={!currentUser?.emailVerified ? <SignUp/> : <Navigate to='/' replace/>
//                         } />
//                         <Route path='/verify-email' element={<VerifyEmail/>} /> 
//                     </Routes>
//                 </AuthProvider>
//             </Router>
            
//         )
//     }

