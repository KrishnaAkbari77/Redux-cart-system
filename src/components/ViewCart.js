import React, { useState } from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import { deleteItem, deleteSingleItem } from '../redux/action';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const ViewCart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart);
  const [show, setShow] = useState(false);
  let count = 1;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSingleDelete = (item, itemId) => {
    dispatch(deleteSingleItem(item, itemId))
  }
  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId))
  }

  let total = cartData.length > 0 && cartData.reduce((sum, item) => sum + item.price * item.Quantity, 0);
  if (cartData.length === 0) {
    return (
      <div>Your cart is empty <br></br>
        <Link to="/">← Products</Link>
      </div>
    );
  }
  return (
    <>
      <div className='container text-left'>
        <Link to="/" className='text-dark bg-light fs-3'> ← Products</Link>
      </div>
      <table className="container table table-bordered my-2 table-responsive">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Category</th>
            <th scope="col">Each Price</th>
            <th scope="col">Total Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.length > 0 && cartData.map((i) =>
            <tr key={i.id}>
              <th >{count++}</th>
              <th >{i.name}</th>
              <td>{i.Quantity}</td>
              <td>{i.category}</td>
              <td>{i.price}</td>
              <td>{i.price * i.Quantity}</td>
              <td>
                <button className='btn' onClick={() => handleSingleDelete(i, i.id)} >
                  <AiOutlineMinusCircle className='icon' />
                </button>
                <button className='btn' onClick={() => handleDelete(i.id)}>
                  <RiDeleteBinLine className='icon' />
                </button>
              </td>
            </tr>
          )}
          <tr className='table-light'>
            <td colSpan="4">TOTAL :</td>
            <th colSpan="3">{total}</th>
          </tr>
        </tbody>
      </table>

      <div className='container text-end'>
        <Button variant="primary" onClick={handleShow} >
          SAVE
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='text-center'>
          <h3 >Saved Successfully </h3>
        </Modal.Body>
        <img src='https://pixlok.com/wp-content/uploads/2021/12/Green-Tick-Icon-SVG-03vd.png'
          style={{ height: "150px", width: "150px", margin: '10px auto' }} />
      </Modal>

    </>
  )
}

export default ViewCart