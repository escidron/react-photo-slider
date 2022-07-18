import React, { useState } from 'react'
import Item from './Item'
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

const Items = ({items,isLoading}) => {
    const [pos,setPos] = useState(0)

    return isLoading ? (<h1>Loading...</h1>):(<section className='cards'>
    
    
      <button className='btn' id='btn1'  onClick={() => setPos((c) => c - 1)}><FaAngleLeft /></button>
      <img src={items[pos].img} alt='' />
      <button className='btn' id='btn2' onClick={() => setPos((c) => c + 1)}><FaAngleRight /></button>
    
    
    
  </section>)
}


export default Items