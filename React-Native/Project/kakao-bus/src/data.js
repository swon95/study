import dayjs from 'dayjs'

export const busStop = {
    id : 23284,
    name : "강남역 12번 출구",
    directionDescription : "강남역, 강남역사거리",
    buses : [
        {
            type : "B", // 색상 bule
            num : 146, // 버스 번호
            directionDescription : "강남역, 강남역사거리",
            isBookmarked : false, // 북마크(즐겨찾기)의 유무
            nextBustInfos : [ // 다음에 도착하는 버스의 정보
                // 1
                {
                    arrivalTime : dayjs().add(8, 'minute'), // 현재 시간으로부터 8분 뒤
                    numOfRemainedStops : 5, // 현재 위치로부터 남은 정류장의 수
                    numOfPassengers : 3, // 현재 탑승해있는 승객들의 수 == 좌석의 개수에 영향
                },
                // 2
                {
                    arrivalTime : dayjs().add(21, 'minute').add(3, 'second'), // 00분 00초
                    numOfRemainedStops : 11,
                    numOfPassengers : 5,
                }
            ]

        }
    ]
}