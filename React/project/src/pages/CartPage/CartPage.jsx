import React, { useEffect } from 'react'
import Clayful from 'clayful/client-js'

function CartPage() {
    
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

            console.log(data)
        })
    }, [])
    return (
        <div>
            CartPage
        </div>
    )
}

export default CartPage
