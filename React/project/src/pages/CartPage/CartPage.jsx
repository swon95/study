import React, { useEffect, useState } from 'react'
import Clayful from 'clayful/client-js'
import { Navigate, useNavigate } from 'react-router-dom'
import './CartPage.css'
import CartItem from './Section/CartItem'

function CartPage() {
    const [cart, setCart] = useState({})
    const navigete = useNavigate()
    
    useEffect(() => {
        var Cart = Clayful.Cart

        var options = {
            customer : localStorage.getItem('accessToken')
        }

        Cart.getForMe({}, options, function(err, result) {
            if (err) {
                // Error case
                console.log(err.code)
                return
            }

            var data = result.data
            setCart(data.cart)

            console.log(data)
        })
    }, [])
    
    const items = cart.items
    console.log('items', items)
    return (
        <div className='pageWrapper'>
            <div className='shopping-cart'>
                <h1 className='title'>장바구니</h1>

                {/* 장바구니에 아이템 나열하기 */}
                <div className='shopping-cart-body' style={{ minHeight:100 }}></div>
                    {items && items.length > 0 ? (
                        items.map((item, index) => {
                            return (
                                <CartItem 
                                    key={item._id}
                                    item={item}
                                    index={index} />
                            )
                        })
                    ) : (
                        <p style={{ textAlign:'center', marginTop:'2rem' }}>장바구니에 담긴 상품이 없습니다.</p>
                    )}
                    
                {items && items.length > 0 && (
                    <div className='bottom'>
                        <span className='total-prise'>
                            총 금액: {cart.total?.amount.raw}{" "}
                        </span>
                        <button
                            style={{ float : "right", padding: "4px 8px" }}
                            onClick={() => Navigate('/payment')}>결제
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage
