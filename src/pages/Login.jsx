import React from 'react'
import "../styles/login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div class="Lmain">
		<div class="box">
			<div class="imgBx">
				<img src="../../public/loginimg5.jpg" />
			</div>
			{/* <!--  --> */}
			<div class="box2">
				<form >
					<h1>Login</h1>
						<div class="inputBx">
							<input required="" id="name" type="text" name="username" />
							<span class="text"> <i class="fa fa-user"></i> Name</span>
							<span class="line"></span>
						</div>
						<div class="inputBx">
							<input required="" id="pass" type="Password" name="password" />
							<span class="text">Password</span>
							<span class="line"></span>
						</div>
						<div class="inputBx">
							<input type="submit" name="login" value="Login" />
							OR <Link to="/register">SignUp</Link>
						</div>
				</form>
			</div>
		</div>
	</div>
  )
}
