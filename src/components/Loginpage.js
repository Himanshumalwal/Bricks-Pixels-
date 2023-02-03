import React, { useState } from 'react'


const Loginpage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [flag, setFlag] = useState(false);

    const users = []
    const onClick = () => {
        if (email && password) {
            setFlag(false)
            for (let index = 0; index < users.length; index++) {
                const user = users[index];
                console.log(user.userid, email, typeof (user.userid), typeof (email))
                if (user.userid === email) {
                    setFlag(true)
                    console.log(user.password, user.password === password)
                    if (user.password === password) {
                        props.setislogin(true)
                    } else {
                        setFlag(true)
                        setMessage("password is wrong")
                    }
                }
            }
            if (!flag) {
                console.log(flag)
                users.push({
                    userid: email,
                    password: password
                })
                setMessage("user has been registered")
            }
            console.log(users)
        }
        else {
            setMessage("enter email and password")
        }
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
                <div className="border bg-[blue] text-[white] py-2 px-5 cursor-pointer rounded mt-2" onClick={() => { onClick() }}>
                    Submit
                </div>
                <div className='text-[black]'>
                    {message && message}
                </div>
            </div>
        </>
    )
}

export default Loginpage