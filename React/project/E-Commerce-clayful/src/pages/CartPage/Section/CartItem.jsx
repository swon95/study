import React from 'react'
import './CartItem.css'

function CartItem({ item }) {
  // props.item
  return (
    <div className='item'>

      {/* 상품 이미지 영역 */}
      <div className='image'>
        <img style={{ height:'100%'}} src={item.product.thumbnail.url} alt={item.product.name} />
      </div>

      {/* 상품 설명 영역 */}
      <div className='description'>
        <span>{item.product.name}</span>
        <span>Bball High</span>
        <span>White</span>
      </div>

      {/* 상품 수량 영역 */}
      <div className='quantity'>
        <button className='plus-btn' type='button' name='button'>+</button>
        <input type="text" readOnly name='name' value={item.quantity.raw} />
        <button className='minus-btn' type='button' name='button'>-</button>
      </div>

      {/* 상품 금액 영역 */}
      <div className='total-price'>₩{item.price.original.raw}</div>

      {/* 상품 제거 영역 */}
      <div className='buttons'>
        <span className='delete-btn'>X</span>
      </div>
    </div>
  )
}

export default CartItem
