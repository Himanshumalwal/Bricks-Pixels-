import React, { useState } from 'react'


const Loginpage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [users, setuser] = useState([]);
    

    const Register = () => {
        if (email === '' && password === '') {
            setMessage("enter email and password")
            return
        }

        for (let index = 0; index < users.length; index++) {
            let user = users[index];
            if (user.userid === email) {
                setMessage("User already exist")
                return
            }
        }


        const temp = [...users]
        temp.push({
            userid: email,
            password: password
        })
        setuser(temp)
        setMessage("user has been registered")
    }

    const Login = () => {
        if (email === '' && password === '') {
            setMessage("enter email and password")
            return
        }

        // if (email !='' && password !='') {
        for (let index = 0; index < users.length; index++) {
            let user = users[index];
            if (user.userid === email) {
                if (user.password === password) {
                    props.setislogin(true)
                } else {
                    setMessage("password is wrong")
                }
                return
            }
            // }

             

            // console.log(users)
        }

        setMessage("User does not exist")

    }
    return (
        <>
            <div className="h-screen w-screen  flex justify-center flex-col text-right items-center bg-gradient-to-b from-pink-200 to-pink-400 ">
                <div className="text-[black]">
                    Email
                </div>
                <input type="text" name="text" className="p-3 border" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <div className="text-[black] mt-2">
                    Password
                </div>
                <input type="Password" name="rtret" className="p-3 border" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                {/* <div  onClick={()=>{
          navigate("/signUp")
      }} className="border text-[blue] py-2 px-5 cursor-pointer rounded mt-2">
        Sign Up
      </div> */}
      <div className='flex'>

                <div className="border bg-[blue] text-[white] py-2 px-5 cursor-pointer rounded mt-2 mr-2" onClick={() => { Login() }}>
                    Login
                </div>

                <div className="border bg-[blue] text-[white] py-2 px-5 cursor-pointer rounded mt-2 ml-2" onClick={() => { Register() }} >
                    SignUp
                </div>
      </div>

                <div className='text-[black]'>
                    {message}
                </div>
            </div>
        </>
    )
}

export default Loginpage