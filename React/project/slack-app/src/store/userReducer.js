const SET_USER = "SET_USER"
const CLEAR_USER = "CLEAR_USER" // 로그아웃 시 유저 정보 제거

export const setUser = (user) => ({ type: SET_USER, currentUser: user })
export const clearUser = () => ({ type: CLEAR_USER })

const initialState = {
    currentUser : null,
    isLoading : true
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:  // SET_USER 일 경우 return 문 실행
            return{
                currentUser : action.currentUser,
                isLoading : false,
            }
        case CLEAR_USER:
            return{
                currentUser : null,
                isLoading : false,
            }
            
        default:
            return state
    }
}

export default userReducer