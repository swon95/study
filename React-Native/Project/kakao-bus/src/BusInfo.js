import { View, Text } from 'react-native';
import BookmarkButton from './BookmarkButton';
import { COLOR } from './color';
import NextBusInfo from './NextBusInfo';
import AlarmButton from './AlarmButton';

export default ({
    isBookmarked,
    onPressBookmark,
    num,
    directionDescription,
    numColor
}) => {
    return (
        <View style={{ flexDirection: 'row'}}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
                {/* 북마크 */}
                <BookmarkButton
                    // props
                    isBookmarked={isBookmarked}
                    onPress={onPressBookmark}
                    style={{ paddingHorizontal: 10 }}
                />
                {/* 버스번호, 방향 */}
                <View style={{ flex: 1 }}>
                    <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
                    <Text style={{ fontSize: 13, color: COLOR.GRAY_3}}>{directionDescription} 방향</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                {/* M분 S초 / N 분째 전 / 여유 */}
                <View style={{ flex: 1 }}>
                    {/* 정보가 있을 경우 */}
                    <NextBusInfo 
                        hasInfo={true}
                        remainedTimeText={"8분 0초"}
                        numOfRemainedStop={5}
                        seatStatusText={"여유"}
                    />
                    {/* 정보가 없을 경우 */}
                    <NextBusInfo 
                        hasInfo={false}
                        remainedTimeText={"도착 정보 없음"}
                    />
                </View>

                {/* 알람아이콘 */}
                <AlarmButton onPress={() => {}} style={{ paddingHorizontal: 15 }}/>
            </View>
        </View>
    )
}