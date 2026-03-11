import { useState, createContext, useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("users");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

   
    const register = (userData) => {
        const { name, email, password, role } = userData;
        
       
        if (!name || !email  ||!password) {
            toast.error("please fill all fields");
            return;
        }

        if (password.length < 8) {
            toast.error("password must be more than 7 characters");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        
        const isExisted = users.find((user) => user.email === email);
        if (isExisted) {
            toast.error("Email already exist, please login");
            return;
        }

       
        const newUser = { id: Date.now(), name, email, password, role };
        
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        toast.success("Register successful. try login now");
    };

    return (
        <UserContext.Provider value={{register,user, }}>
            {children}
        </UserContext.Provider>
    );
};