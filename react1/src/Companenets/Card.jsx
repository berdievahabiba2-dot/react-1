import React from 'react'
import './Card.css'

const Card = (props) => {
  const{name,data,but,but1,student,but2,quali,but3,month,cloc,ico}=props
  return (
    <div className='card'>
      <div className='card-top'>
      <div>
        <h3>{name}</h3>
        <p>{data}</p>
        <button className='bit-too'>{but}</button>
      </div>
      
      <div>
        <button className='but-main'>{but1}</button>
        <p>{student}</p>
      </div>
      </div>
      <hr/>

      <div  className='card-button'>
        <div>
          <button className='but-min'>{but2}</button>
          <p>{quali}</p>
          <button className='bit-to'>{but3}</button>
        </div>
        <div>
          <h3>{month}</h3>
          <p>{cloc}</p>
          <p>{ico}</p>
        </div>
      </div>
    </div>
  )
}
export default Card