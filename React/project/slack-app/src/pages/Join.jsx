import {
    Avatar,
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import TagIcon from "@mui/icons-material/Tag";
import React, { useEffect, useState } from "react";
import "./../firebase"
import {
    getAuth, // 유저 데이터 권한
    createUserWithEmailAndPassword, // 유저 이메일과 비밀번호 생성
    updateProfile, // 닉네임 및 프로필 업데이트
} from "firebase/auth";
import md5 from "md5"
import { getDatabase, ref, set } from "firebase/database"

// password 유효성 검사
const IsPasswordValid = (password, confirmPassword) => {
    if(password.length < 6 || confirmPassword.length < 6){ // 길이가 6자 이하일 경우 false
        return false
    } else if(password !== confirmPassword) { // 일치하지 않을 경우 false
        return false
    } else { // 모두 만족할 경우 true
        return true
    }
}

function Join() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const confirmPassword = data.get("confirmPassword");
        // console.log(data, name, email, password, confirmPassword)

        // 해당 조건이 존재하지 않을 경우 Alert 메세지 출력
        if (!name || !email || !password || !confirmPassword) {
            setError("입력되지 않은 항목이 존재합니다.");
            return;
        }
        
        if (!IsPasswordValid(password, confirmPassword)){
            setError("비밀번호가 일치하지 않습니다.")
            return;
        }
        postUserData(name, email, password)
    };
    
    const postUserData = async(name, email, password) => {
        setLoading(true) // 로딩 화면 출력
        try {
            // firebase 에 계정이 생성되어 로그인 상태로 변경
            const {user} = await createUserWithEmailAndPassword(getAuth(), email, password)
            // 가입 한 유저의 프로필 정보 업데이트
            await updateProfile(user, {
                displayName: name,
                photoURL: `https://www.gravatar.com/avatar/${md5(email)}?d=retro` // 해시 값, d == parameter
            })
            // RealTime DB 에 저장
            await set(ref(getDatabase(), 'users/'+user.uid),{ // 경로 지정
                name: user.displayName,
                avatar: user.photoURL
            })
            // Redux 를 사용하여 TODO Store 에 user 정보 저정
        } catch(e){
            setError(e.message) // firebase message property 에러 보여주기
            setLoading(false)
        }
    }

    // 에러 메세지가 발생할 경우 출력 후 setTimeout
    useEffect(()=>{
        if(!error) return
        setTimeout(()=>{setError("")}, 3000) // 3초 후 제거
    })
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <TagIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>

                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                required
                                fullWidth
                                label="닉네임"
                                autoFocus
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                required
                                fullWidth
                                label="이메일 주소"
                                autoComplete="off" // 자동완성 기능 false
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                required
                                fullWidth
                                label="비밀번호"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="confirmPassword"
                                required
                                fullWidth
                                label="확인 비밀번호"
                                type="password"
                            />
                        </Grid>
                    </Grid>

                    {/* 삼항연산자를 횔용하여 에러가 존재하는 경우에만 메세지 출력*/}
                    {error ? (
                        <Alert sx={{ mt: 3 }} severity="error">
                            {error}
                        </Alert>
                    ) : null}

                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        loading={loading}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        회원가입
                    </LoadingButton>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "blue",
                                }}
                            >
                                이미 계정이 있나요? 로그인으로 이동
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Join;
