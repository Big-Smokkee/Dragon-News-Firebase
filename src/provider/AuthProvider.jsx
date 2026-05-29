import { createContext, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'lal mia',
        pass: 'abcd'
    })
    const userInfo = {
        user,
        setUser
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;