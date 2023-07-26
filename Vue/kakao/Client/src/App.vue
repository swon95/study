<template>
  <form class="daummap" @submit.prevent="submitForm">
    <span>우편 번호</span>
    <input type="text" id="sample4_postcode" readonly v-model="postcode"/>
    <input type="button" @click="execDaumPostcode" value="주소 검색"><br>
    <span>도로명 주소</span>
    <input type="text" id="sample4_roadAddress" readonly v-model="roadAddress"><br>
    <span>지번 주소</span>
    <input type="text" id="sample4_jibunAddress" readonly v-model="jibunAddress">
    <span id="guide" style="color:#999;display:none"></span>
    <input type="text" id="sample4_detailAddress" v-model="detailAddress" placeholder="상세주소">
    <input type="text" id="sample4_extraAddress" v-model="extraAddress" placeholder="참고항목">
    <button type="submit">전송</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'daumMap',
  data() {
    return {
      postcode: "",
      roadAddress: "",
      jibunAddress: "",
      detailAddress: "", // 상세주소
      extraAddress: "",
    };
  },

  methods: {
    resetFormFields() {
      this.postcode = "";
      this.roadAddress = "";
      this.jibunAddress = "";
      this.detailAddress = "";
      this.extraAddress = "";
    },

      execDaumPostcode() {
          // daum.Postcode => window.daum.Postcode
          new window.daum.Postcode({
            oncomplete: (data) => {
              // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            
              // 도로명 주소의 노출 규칙에 따라 주소를 표시
              // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여  분기한다.
              let roadAddr = data.roadAddress; // 도로명 주소 변수
              let extraRoadAddr = ''; // 참고 항목 변수
            
              // 법정동명이 있을 경우 추가한다. (법정리는 제외)
              // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraRoadAddr += data.bname;
              }
              // 건물명이 있고, 공동주택일 경우 추가한다.
              if(data.buildingName !== '' && data.apartment === 'Y'){
                 extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName :  data.  buildingName);
              }
              // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
              if(extraRoadAddr !== ''){
                  extraRoadAddr = ' (' + extraRoadAddr + ')';
              }
              // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
              if(roadAddr !== ''){
                roadAddr += extraRoadAddr;
                    console.log('roadAddr: ', roadAddr)
                }
              
              // 우편번호와 주소 정보를 해당 필드에 넣는다.
              this.postcode = data.zonecode;
              this.roadAddress = roadAddr;
              this.jibunAddress = data.jibunAddress;
              console.log('jibun', data.jibunAddress)
              
              // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
              if(roadAddr !== ''){
                this.extraAddress = extraRoadAddr;
              } else {
                this.extraAddress = '';
              }
            
              // // var guideTextBox = document.getElementById("guide");
              // // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
              // if(data.autoRoadAddress) {
              //     let expRoadAddr = data.autoRoadAddress + extraRoadAddr;
              //     this.guideText = '(예상 도로명 주소 : ' + expRoadAddr + ')';
              // 
              // } else if(data.autoJibunAddress) {
              //     let expJibunAddr = data.autoJibunAddress;
              //     this.guideText = '(예상 지번 주소 : ' + expJibunAddr + ')';
              // } else {
              //     this.guideText = ""
              //   }
          },
      }).open();
    },
      // 서버에 전송할 데이터
      submitForm() {
        const formData = {
          postcode: this.postcode,
          roadAddress: this.roadAddress,
          jibunAddress: this.jibunAddress,
          detailAddress: this.detailAddress,
          extraAddress: this.extraAddress,
      }
      console.log('전송할 데이터', formData)
      // 로컬 스토리지에 데이터 저장
      localStorage.setItem('addressData', JSON.stringify(formData))
      // 전송할 데이터 확인
      console.log('전송할 데이터', formData)
      // 데이터를 저장하고 나면 fieled 에 출력된 데이터 초기화
      this.resetFormFields()
      
      axios.post('/', formData)
        .then(response => {
          console.log('서버 ok :', response.data)

        })
        .catch(error => {
          console.log('서버 x :', error)

        })
    },
  },
  
  // 컴포넌트가 mount 될 때 실행
  mounted() {
    // 로컬 스토리지에서 데이터 불러오기
    const savedData = localStorage.getItem('addressData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      this.postcode = parsedData.postcode
      this.roadAddress = parsedData.roadAddress
      this.jibunAddress = parsedData.jibunAddress
      this.detailAddress = parsedData.detailAddress
      this.extraAddress = parsedData.extraAddress
    }
  }
}
</script>

<style>

</style>