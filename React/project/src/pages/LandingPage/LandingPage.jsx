import React from 'react'
import Clayful from 'clayful/client-js'

function LandingPage() {
  var Product = Clayful.Product
  var option = {
    query : {
      page : 1
    }
  }

  Product.list(option, function(err, response){
    if (err) {
      console.log(err.isClayful)
      console.log(err.model)
      console.log(err.method)
      console.log(err.status)
      console.log(err.headers)
      console.log(err.code)
      console.log(err.message)
    }
    console.log(response.status)
    console.log(response.headers)
    console.log(response.data)
  })

  return (
    <div className='pageWarrper'>
      12111111
    </div>
  )
}

export default LandingPage
