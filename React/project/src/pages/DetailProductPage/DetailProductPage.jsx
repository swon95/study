import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Clayful from 'clayful/client-js'

function DetailProductPage() {
    const params = useParams()
    const productId = params.productId
    // console.log('ProductId', productId)

    useEffect(() => {
        let Product = Clayful.Product
        let options = {}

        Product.get(productId, options, function (err, result) {
            if (err) {
                // Error case
                console.log(err.code)
                return
            }

            // let headers = result.headers
            let data = result.data
            console.log(data)
        })
    }, [])

return (
    <div>
        DetailProductPage
    </div>
)
}

export default DetailProductPage
