// ProductInfos 의 부모 컴포넌트

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Clayful from 'clayful/client-js'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductInfos from './Sections/ProductInfos'

function DetailProductPage() {
    const params = useParams()
    const productId = params.productId
    // console.log('ProductId', productId)
    const [item, setItem] = useState({}) // 객체로 받아오기

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
            // console.log(data)
            setItem(data)
        })
    }, [])

return (
    <div className='pageWrapper'>
        <Row>
            <Col md>
                <div>
                    {/* ? 의 의미 == item에 thumbnail url 이 있을 경우에만 페이지 렌더링 진행 */}
                    <img style={{ width:'100%'}} src={item.thumbnail?.url} alt={item.name} />
                </div>
            </Col>
            <Col md>
                <ProductInfos />
            </Col>
        </Row>
    <div dangerouslySetInnerHTML={{__html: item.description}} />
    </div>
)
}

export default DetailProductPage
