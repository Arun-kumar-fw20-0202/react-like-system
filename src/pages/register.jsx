import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/register.css"

const profile = {
	name:"",
	last_name: "",
	mobile: "",
	gmail: "",
	password: "",
	gender: "",
	avatar:"",
}
export default function Register() {

	const [user,setUser] = useState(profile)	
	const [loading, setLoading] = useState(false)
	const { name, last_name, mobile, gmail, password, gender,avatar} = user;
	
	const handleSubmit = async (e) =>{
		e.preventDefault();
		let res = await fetch(`http://localhost:8080/user`,{
			method: 'POST',
			body: JSON.stringify(user),
			headers:{
				'Content-Type': 'application/json',
			}
		})
		let data = await res.json();
		setUser(profile)
	}
	
	const  handleChange = (e) => {
		let val = e.target.value;
		setUser({...user, [e.target.name]: val})
	}

	let image_url;
	const handleAvatar = async (e)=>{
		setLoading(true)
		try{

			let image = document.querySelector('#image');			
			let actual_image = image.files[0];
			
			let form = new FormData();
			form.append('image', actual_image);
			
			// console.log(actual_image)
			let res = await fetch(`https://api.imgbb.com/1/upload?key=f8c6dae46c1e3a6c267aa2ea5d96aacd`, {
				method: 'POST',
				body: form,
			});
	
			let data = await res.json();
			image_url = data.data.display_url;
			setUser({...user, [e.target.name]: image_url})
			setLoading(false)
	
		}catch(err){
			console.log(err);
		}
	}

	
  return (
    <div className="Rmain">
		<div className="box">
			<div className="imgBx">
				<h1>Register</h1>
				<img src="../../public/loginimg.jpg" />
				<h3><a href="#">Term Policy & Term of Service</a></h3>
			</div>
			{/* <!--  --> */}
			<div className="box2">
				{/* <!-- form --> */}
				<form onSubmit={handleSubmit}>
				<div className="inputBx">
					<input value={name} onChange={handleChange} required="required" type="text" name="name" minLength="0" maxLength="25" />
					<span className="text">Name</span>
					<span className="line"></span>
				</div>
				{/* <!--  --> */}

				<div className="inputBx">
					<input value={last_name} onChange={handleChange} required="required" type="text" name="last_name" />
					<span className="text">Last Name</span>
					<span className="line"></span>
				</div>
				{/* <!--  -->	 */}
				{/* <!--  --> */}
				<div className="inputBx">
					<input onChange={handleChange} value={mobile} required="required" type="tel" name="mobile"  minLength="0" maxLength="10" />
					<span className="text">Phone No:</span>
					<span className="line"></span>
				</div>
				{/* <!--  -->				 */}
				<div className="inputBx">
					<input onChange={handleChange} value={gmail} required="required" type="email" name="gmail" />
					<span className="text">Gmail</span>
					<span className="line"></span>
				</div>	
				{/* <!--  --> */}
					
				<div className="inputBx">
					<input onChange={handleChange} value={password} required="required" type="password" name="password" autoComplete="off" />
					<span className="text">password</span>
					<span className="line"></span>
				</div>
				{/* <!--  --> */}
				
				<div className="inputBx">
					<select name="gender"  value={gender} onChange={handleChange}>
						<option disabled="">Select Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="custom">Custom</option>
					</select>
				</div>
				{/* <!--  -->	 */}
				<div className="inputBx">
					<input type="file" onChange={handleAvatar} id="image" name="avatar" />
				</div>
				{/* <!--  -->	 */}
				<div className="btnBx">
					{loading ? <input type="submit" value="Loading..." disabled={true} /> : <input type="submit" value="Register" />}					
					or <Link to="/login">Sign In</Link>
				</div>
			</form>
			</div>
		</div>
	</div>
  )
}
