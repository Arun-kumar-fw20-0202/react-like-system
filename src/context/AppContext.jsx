import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }){
    const [isAuth, setIsauth] = useState(false)
    const [user, setuser] = useState({})

    // Set data to localy 
        let userAuth = JSON.parse(localStorage.getItem('setAuth')) || []
        const { auth, userData } = userAuth
    // Set data to localy
    
    const UserLogin = (data) => {
        setuser(data)
        setIsauth(true)
    }
    if(isAuth){
        let authantication = {
            userData: user,
            auth: true
        }
        localStorage.setItem("setAuth", JSON.stringify(authantication));
        setTimeout(function(){
            window.location.href = "/"
        },500)
    }

    const Logout = () => {
        setIsauth(false)
        setuser({})
        localStorage.removeItem("setAuth")        
        window.location = "/login"
    }

    return (
        <AuthContext.Provider value={{UserLogin, Logout, isAuth: auth || false, user: userData || {}}}>
            {children}
        </AuthContext.Provider>
    )
}