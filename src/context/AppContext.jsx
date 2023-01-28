import { createContext } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }){
    
    const Login = () => {
        alert("Login")
    }

    return (
        <AuthContext.Provider value={{Login}}>
            {children}
        </AuthContext.Provider>
    )
}