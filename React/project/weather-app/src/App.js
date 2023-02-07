import {useEffect, useState} from 'react'
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

function App() {
  // 초기 null 상태인 weather 에 data 가 들어왔을 때 ? => 바뀌는 값 => setWeather
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const citise = ['Gangneung', 'Goseong', 'Samcheok', 'Sokcho', 'Yangyang']

  // 현재 위치정보를 가져오기위해 getCurrentLocation
  const getCurrentLocation = () => {
    // weather state 생성

    // 익명함수 생성 ~ // 매개변수로는 position 을 받음
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude // 위도
      let lon = position.coords.longitude // 경도
      // console.log('현재 위치', lat, lon)
      getWeatherByCurrentLocation(lat, lon)
    })
  }

    const getWeatherByCurrentLocation = async(lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72346c86cf22cc5b98c7148afee9a7a1&units=metric`
      let response = await fetch(url)
      let data = await response.json()
      // console.log('data', data)
      setWeather(data)
    }

    const getWeatherByCity = async() => { // city State 가져오기
      // useEffect 에서 이미 바뀐 값을 가져오기 때문에 비동기처리 x
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72346c86cf22cc5b98c7148afee9a7a1&units=metric`
      let response = await fetch(url)
      let data = await response.json()
      console.log('data', data)
      setWeather(data)
    }
  useEffect(() => {
    // 만약 city 의 값이 비어있다면,
    if (city == "") {
      // 함수 실행
      getCurrentLocation()
    }
    // 그게 아니라 뭔가 들어있다면, 
    else {
      // 함수 실행
      getWeatherByCity()
    }
  }, [city])

  // useEffect(() => {
  //   // console.log('city', city)
  //   getWeatherByCity()
  // }, [city])

  return (
    <ContentBox>
        <WeatherBox weather={weather} />
        <WeatherButton citise={citise} setCity={setCity}/>
    </ContentBox>
  );
}

export default App;


const ContentBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


