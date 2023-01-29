import React, { useContext, useEffect, useState } from 'react'
import "../styles/login.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const logniData = {
	gmail :"arun.kumar97107@gmail.com",
	password: "123456789",
}
export default function Login() {
	const [user, setUser] = useState(logniData)
	const [loginData, setLogindata] = useState([])
	const {UserLogin} = useContext(AuthContext)

	const { gmail, password } = user;

	const  handleChange = (e) => {
		let val = e.target.value;
		setUser({...user, [e.target.name]: val})
	} 
	const handleSubmit = (e) => {
		e.preventDefault();
		let temp = 0;
		console.log(temp)
        let final = {}
        for(let i = 0; i <= loginData.length-1; i++){
            if(loginData[i].gmail === gmail && loginData[i].password === password){
                temp = 1;
                final = loginData[i]
                break
            }
        }
        if(temp == 1){
            toast.success("Login successful!",{
				position: "bottom-right",
				theme: "dark",
			});
            setTimeout(function(){
                UserLogin(final)
            },700)
        }else{
			toast.error("Username or password is wrong !",{
				position: "bottom-right",
				theme: "dark"
			});
		}
	}



///// // // // // // 
	const getLoginData = async () => {
		let res = await fetch(`http://localhost:8080/user`)
        let json = await res.json();
		setLogindata(json)
	}
	useEffect(() => {
		getLoginData()
	},[])



  return (
    <div className="Lmain">
		<ToastContainer 
		// limit= {1}
		 />
		<div className="box">
			<div className="imgBx">
				<img src="../../public/loginimg5.jpg" />
			</div>
			{/* <!--  --> */}
			<div className="box2">
				<form onSubmit={handleSubmit}>
					<h1>Login</h1>
						<div className="inputBx">
							<input required="" id="name" onChange={handleChange} type="text" name="gmail" value={user.gmail} />
							<span className="text"> <i className="fa fa-user"></i> Name</span>
							<span className="line"></span>
						</div>
						<div className="inputBx">
							<input required="" id="pass" type="Password" onChange={handleChange} name="password" value={user.password} />
							<span className="text">Password</span>
							<span className="line"></span>
						</div>
						<div className="inputBx">
							<input type="submit" name="login" value="Login" />
							OR <Link to="/register">SignUp</Link>
						</div>
				</form>
			</div>
		</div>
	</div>
  )
}
