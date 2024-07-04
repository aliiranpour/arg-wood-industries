import React from 'react'
import { Container } from 'react-bootstrap'
import quality from '../../assets/image/quality.png'
import price from '../../assets/image/price (2).png'
import support from '../../assets/image/support (2).png'

const Why_arg = () => {
  return (
    <Container>
        <div className=' border-bottom my-4 pb-3'>
            <h3>چرا صنایع سنگ ارگ؟</h3>
        </div>
        <div className=' d-flex gap-5 justify-content-around mt-5 flex-shrink-1 flex-wrap'>
                <img className=' w-25' src={quality} alt="" />
                <img src={ price } className=' w-25' alt="" />
                <img src={ support } className=' w-25' alt="" /> 
        </div>
    </Container>
)
}

export default Why_arg