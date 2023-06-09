import { useState } from 'react'
import style from './Pizza.module.css'
import Modal from 'react-bootstrap/Modal';

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{ margin: '70px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className={style.img} />
            </div>
            <div className={style.container}>
                <div className='w-100 m-1'>
                    <p>varients</p>
                    <select className='form-control' value={varient} onChange={(e) => setVarient(e.target.value)}>
                        {pizza.varients.map((varients) => <option value={varients}>{varients}</option>)}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((x, i) =>
                            <option value={i + 1}>{i + 1}</option>)}
                    </select>
                </div>
            </div>
            <div className={style.container}>
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price : {pizza.prices[0][varient] * quantity} Rs/-</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className={style.btn}>ADD TO CART</button>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   <img src={pizza.image} className='img-fluid' style={{height:'400px'}}/>
                   <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className={style.btn} onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}