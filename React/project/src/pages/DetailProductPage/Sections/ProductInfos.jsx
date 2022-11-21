// DetailProductPage 의 자녀 컴포넌트

import React, { useState, useContext } from 'react'
import './ProductInfos.css'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Clayful from 'clayful/client-js'


function ProductInfos({ detail }) {
    const [count, setCount] = useState(1)
    // detail 이 없으면 아래 return 문을 실행하지않음
    // if (!detail)
    // return
    const { isAuth } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleQuantityClick = (type) => {
        if (type === 'plus') {
            setCount((prev) => prev + 1)
        } else {
            if (count === 1) return // count 가 1 이면 return
            setCount((prev) => prev - 1)
        }
    }

    const handleActionClick = (type) => {
        if (!isAuth) { // 로그인 정보 확인 => 로그인 되어있지 않은 상태라면 ?
            alert('로그인 후 이용 가능합니다.') // 경고창 출력 후
            navigate('/login') // 페이지 이동
            return
        }

        let Cart = Clayful.Cart;

        let payload = {
            product : detail._id,
            variant : detail.variants[0]._id,
            quantity : count,
            shippingMethod : detail.shipping.methods[0]._id
        };

        let options = {
            customer: localStorage.getItem('accessToken'),
        };

        Cart.addItemForMe(payload, options, function (err, result) {

            if (err) {
                // Error case
                console.log(err.code);
            }

            let headers = result.headers;
            let data = result.data;

            console.log(data);

        });
    }

    return (
        <div>
            <p style={{ color: '#bf4800', marginBottom: 0 }}>New</p>
            <h1 style={{ marginBottom: 20 }}>{detail.name} 구입하기</h1>
            <h5>{detail.summary} 개별 판매 가격 {detail.price?.original.formatted}</h5>

            <div className='quantity'>
                <p style={{ fontWeight: 600, marginBottom: 5 }}>수량</p>
                <button className='minus-btn' type='button' name='button' onClick={() => handleQuantityClick('minus')}>-</button>
                {/* 버튼의 default 값은 1부터 시작하게 설정 */}
                <input type='text' readOnly name='name' value={count} />
                <button className='plus-btn' type='button' name='button' onClick={() => handleQuantityClick('plus')}>+</button>
            </div>

            {/* line break == 줄 바꿈 */}
            <br />

            <h3>총 상품 금액 : {detail.price?.original.raw * count}원</h3>

            <br />

            <div className='product-info-action' onClick={() => handleActionClick('cart')}>장바구니에 담기</div>
            <div className='product-info-action'>바로 구매</div>
        </div>
    )
}

export default ProductInfos
