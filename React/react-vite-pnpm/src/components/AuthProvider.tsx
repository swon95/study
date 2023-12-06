import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import AuthContext, { AuthContextProp } from "@/components/AuthContext";
import { Collections, User } from "@/types";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (fbUser) => {
      if (fbUser != null) {
        setUser({
          userId: fbUser.uid,
          email: fbUser.email ?? "",
          name: fbUser.displayName ?? "",
          profileUrl: fbUser.photoURL ?? "",
        });

        // 문서 생성
        const userDocRef = doc(getFirestore(), Collections.USERS, fbUser.uid);

        await setDoc(
          userDocRef,
          {
            userId: fbUser.uid,
            email: fbUser.email ?? "",
            name: fbUser.displayName ?? "",
          },
          { merge: true }
        );
      }
      setInitialized(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signin = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user: fbUser } = await signInWithPopup(getAuth(), provider);

      if (fbUser != null) {
        setUser({
          userId: fbUser.uid,
          email: fbUser.email ?? "",
          name: fbUser.displayName ?? "",
          profileUrl: fbUser.photoURL ?? "",
        });
      }
    } finally {
      // ㅇㅁㅇ
    }
  }, []);

  const value = useMemo<AuthContextProp>(
    () => ({
      initialized,
      user,
      signin,
    }),
    [initialized, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
