// DetailProductPage 의 자녀 컴포넌트

import React, { useState } from 'react'
import './ProductInfos.css'

function ProductInfos({ detail }) {
    const [ count, setCount ] = useState()
    // detail 이 없으면 아래 return 문을 실행하지않음
    if (!detail)
    return

    return (
    <div>
        <p style={{ color : '#bf4800', marginBottom : 0}}>New</p>
        <h1 style={{ marginBottom : 20 }}>{detail.name} 구입하기</h1>
        <h5>{detail.summary} 개별 판매 가격 {detail.price?.original.formatted}</h5>

        <div className='quantitiy'>
            <p style={{ fontWeight : 600, marginBottom : 5 }}>수량</p>
            <button className='plus-btn' type='button' name='button'>+</button>
            {/* 버튼의 default 값은 1부터 시작하게 설정 */}
            <input type='text' readOnly name='name' value={count} />
            <button className='munus-btn' type='button' name='button'>-</button>
        </div>
        
        {/* line break == 줄 바꿈 */}
        <br />
        
        <h3>총 상품 금액 : {detail.price?.original.raw * count} 원</h3>
        
        <br/>

        <div className='product-info-action'>장바구니에 담기</div>
        <div className='product-info-action'>바로 구매</div>
    </div>
  )
}

export default ProductInfos
