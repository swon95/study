import {useEffect} from 'react'
import './App.css';

function App() {

  // 현재 위치정보를 가져오기위해 getCurrentLocation
  const getCurrentLocation = () => {

    // 익명함수 생성 ~ // 매개변수로는 position 을 받음
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude // 위도
      let lon = position.coords.longitude // 경도
      // console.log('현재 위치', lat, lon)
      getWeatherByCurrentLocation(lat, lon)
    })
  }

    const getWeatherByCurrentLocation = async(lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72346c86cf22cc5b98c7148afee9a7a1`
      let response = await fetch(url)
      let data = await response.json()
      console.log('data', data)
    }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div>
      무야홍 ~
    </div>
  );
}

export default App;
