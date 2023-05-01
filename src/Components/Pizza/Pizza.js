import style from './Pizza.module.css'


export default function Pizza({pizza}){
    return(
        <div>
          <h1>{pizza.name}</h1>
          <img src={pizza.image} className={style.img}/>
          <div className={style.container}> 
          <div className='w-100'>
          <p>varients</p>
          <select>
          {pizza.varients.map((varients)=><option value={varients}>{varients}</option>)}
          </select>
          </div>
          <div className='w-100'>
          <p>Quantity</p>
          <select>
          {[...Array(10).keys()].map((x,i)=>
          <option value={i+1}>{i+1}</option>)}
          </select>
          </div>
          </div>
        </div>
    )
}