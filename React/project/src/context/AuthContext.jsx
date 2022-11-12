import { createContext, useState } from "react";

export const AuthContext = createContext()


// 인자로 받는 children == app.js 에 AuthContextProvider 가 감싸고 있는 하위(자식) 컴포넌트들을 의미
const AuthContextProvider = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState(false)

    const AuthContextData = {
        isAuth
    }
    
    return (
        // value 로 넣을 데이터 만들어주기 (필요한 데이터와 데이터를 업데이트 해줄 함수)
        <AuthContext.Provider value>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider