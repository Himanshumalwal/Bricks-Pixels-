// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";

// const LoginPage = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isError, setIsError] = useState(false);

//     const handleUsernameChange = event => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = event => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//         if (username === "admin" && password === "admin") {
//             setIsLoggedIn(true);
//             setIsError(false);
//         } else {
//             setIsError(true);
//         }
//     };

//     if (isLoggedIn) {
//         return <Redirect to="/home" />;
//     }

//     return (
//         <div>
//             {isError && <div>Incorrect username or password</div>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Enter username"
//                     value={username}
//                     onChange={handleUsernameChange}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// const SignUpPage = () => {
//     // Similar implementation as LoginPage
// };