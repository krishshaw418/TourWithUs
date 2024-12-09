import React from "react";
// import {UserProvider} from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from "./Signin"
import Signup from "./Signup";
import OtpVerification from "./otpVerification";
import Home from "../src/Homepage/Home";
import Welcome from "../src/Homepage/Welcome";
import UserProfile from "../src/Homepage/UserProfile";
import HolidayPackages from "./Homepage/HolidayPackages";
import Hotels from "./Hotels";
function App(){
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/user/SignUp" element={<Signup/>}/>
        <Route path="/user/SignIn" element={<Signin/>}/>
        <Route path="/user/otp-verification" element={<OtpVerification/>}/>
        <Route path="/user/profile" element={<UserProfile/>}/>
        <Route path="/holidayPackages" element={<HolidayPackages/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
      </Routes>
    </Router>
  )
}

export default App;


// import React, { useState } from "react"

// function App() {
//   const [todo,settodo] = useState([]);

//   // setInterval(()=>{
//   //   settodo({
//   //     title:"Go to Sleep",
//   //     description:"Sleep for an hr.",
//   //     id: 1
//   //   })
//   // },3000)

//   React.useEffect(()=>{
//     fetch("http://localhost:4000/",{
//       method:"GET"
//     })
//     .then((response)=>{
//       response.json()
//       .then((data)=>{
//         settodo(data);
//       })
//     })
//   },[])

//   return (
//     <div>
//     {todo.map((value)=>{
//       return <List title={value.title} description={value.description} id={value.id}></List>
//     })}
//     </div>
//   )
// }

// // function PersonName(props){
// //   return <>
// //   <div>
// //     {props.title}
// //   </div>
// //   </>
// // }

// function List(props){
//   return <div>
//     {props.title}
//     {props.description}
//     {props.id}
//     <br />
//   </div>
// }

// export default App