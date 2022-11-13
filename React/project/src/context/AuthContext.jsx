import React, { createContext, useState } from "react";
import Clayful from 'clayful/client-js'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()


// 인자로 받는 children == app.js 에 AuthContextProvider 가 감싸고 있는 하위(자식) 컴포넌트들을 의미
const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState(false)

    // isAuth 를 업데이트 시켜주는 함수
    const isAuthenticated = () => {
        var Customer = Clayful.Customer

        var options = {
            customer: localStorage.getItem('accessToken')
        }
        
        Customer.isAuthenticated(options, function (err, result) {
            if (err) {
                // Error case
                console.log(err.code)
                // 요청을 보냈는데, 에러가 오는 경우
                setIsAuth(false)
                // 에러 발생 시 더이상 아래 코드가 실행되지 않도록 return 문을 사용
                return
            }
            // var headers = result.headers
            var data = result.data

            if (data.authenticated) {
                // 로그인 상태 인 경우
                setIsAuth(true)
            } else {
                // 그렇지 않은 경우
                setIsAuth(false)
            }

            // console.log(data)
        })
    }

    // 로그아웃 부분을 담당하는 함수
    const signOut = () => {
        setIsAuth(false)
        localStorage.removeItem('accessToken') // 토큰 제거
        navigate('/login') // 페이지 이동

    }


    // 선언한 함수를 사용하는 부분
    const AuthContextData = {
        isAuth,
        isAuthenticated,
        signOut
    }

    return (
        // value 로 넣을 데이터 만들어주기 (필요한 데이터와 데이터를 업데이트 해줄 함수)
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider