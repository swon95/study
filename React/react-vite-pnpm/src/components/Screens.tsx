import { auth } from "@/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useState } from "react";

export const Screens = () => {
  const [userData, setUserData] = useState<null | User>(null);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      setUserData(user);
      console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
        console.log("User logged out successfully");
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  return (
    <div>
      <h3>구글 로그인 테스트</h3>
      <div>
        <button onClick={handleGoogleLogin}>로그인</button>
        <button onClick={logout}>로그아웃 버튼</button>
      </div>
      <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
      <div>
        {userData ? (
          <>
            <p>로그인 된 사용자: {userData.displayName}</p>
            {userData.photoURL && <img src={userData.photoURL} alt="Profile" />}
          </>
        ) : (
          "로그인 버튼을 눌러주세요 :)"
        )}
      </div>
    </div>
  );
};
