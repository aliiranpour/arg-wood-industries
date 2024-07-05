import React from 'react'
import Cooperation from '../../components/Cooperation/Cooperation'
import { Container } from 'react-bootstrap'

const Call_us = () => {
  return (
    <Container>
      <div className=' border border-5 border-danger p-5 rounded-4'>
        <div className=' my-3' >
          <h3>نشانی: </h3>
          <p className=' mx-5'>اصفهان، رضوانشهر، شهرک تخصصی سنگ، خیابان سوم مرکزی</p>
        </div>
        <div>
          <h3>تلفن های تماس :</h3>
          <div className=' mx-5 my-3'>
            <div className=' my-3'>
                <span>مدیریت: </span> <a href="tel:09133109305" className=" text-decoration-none text-black"> 09133109305 </a>
            </div>
            <div className=' my-3'>
              <span>بازرگانی: </span>
              <a href="tel:09133109815" className=" text-decoration-none text-black"> 09133109815 </a>
            </div>
            <div className=' my-3'>
              <span>تلفکس: </span>
              <a href="tel:03142524114" className=" text-decoration-none text-black"> 03142524114 </a>
            </div>
          </div>
        </div>
      <Cooperation />
      </div>
    </Container>
  )
}

export default Call_us