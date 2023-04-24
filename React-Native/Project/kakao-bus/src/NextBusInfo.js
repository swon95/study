import { View, Text } from 'react-native'
import { COLOR } from './color'

export default ({
    hasInfo, // remainedTimeText 가 '도착정보없음' 일때 true
    remainedTimeText, // 현재 운행정보
    numOfRemainedStop, // 현재 남은 정류장 수
    seatStatusText, // 잔여좌석
}) => {
    // 도착정보가 없을 경우 예외처리
    if (!hasInfo) return <Text style={{ color: COLOR.GRAY_2 }}>도착 정보 없음</Text>
    // 도착정보가 있을 경우 아래 return 문 실행
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: COLOR.BLACK, marginRight: 10 }}>{remainedTimeText}</Text>
            
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: COLOR.GRAY_1,
                borderRadius: 3,
                padding: 2,
            }}>
                <Text style={{ color: COLOR.GRAY_3, marginRight: 3 }}>{numOfRemainedStop}번째 전</Text>
                <Text style={{ color: COLOR.COLOR }}>{seatStatusText}</Text>
            </View>
        </View>
    )
}