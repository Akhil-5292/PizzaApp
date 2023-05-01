import Pizza from '../Components/Pizza/Pizza'
import {data} from '../constData'


export default function Home(){
    return(
        <div>
            <div className='row'>
            {
                data.map((x)=>{
                    return <div className='col-md-4'>
                     <div>
                        <Pizza pizza={x}/>
                     </div>
                  </div>
                })
            }
        </div>
        </div>
    )
}