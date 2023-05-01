import { useState } from 'react'
import style from './Pizza.module.css'


export default function Pizza({pizza}){
    const [quantity,setQuantity]=useState(1)
    const [varient,setVarient]=useState('small')
    return(
        <div style={{margin:'70px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
          <h1>{pizza.name}</h1>
          <img src={pizza.image} className={style.img}/>
          <div className={style.container}> 
          <div className='w-100 m-1'>
          <p>varients</p>
          <select className='form-control' value={varient} onChange={(e)=>setVarient(e.target.value)}>
          {pizza.varients.map((varients)=><option value={varients}>{varients}</option>)}
          </select>
          </div>
          <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((x,i)=>
          <option value={i+1}>{i+1}</option>)}
          </select>
          </div> 
        </div>
        <div className={style.container}>
            <div className='m-1 w-100'>
            <h1 className='mt-1'>Price : {pizza.prices[0][varient]*quantity} Rs/-</h1>
            </div>
            <div className='m-1 w-100'>
            <button className={style.btn}>ADD TO CART</button>
            </div>
        </div>
    </div>
    )
}