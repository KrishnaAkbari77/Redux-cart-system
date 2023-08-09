import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addItem, updateItem } from '../redux/action';
import { Link } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const Productsdata = useSelector(state => state);
    const [quantity, setQuantity] = useState([]);

    const handleAddItem = (item, index) => {
        const existing = Productsdata.cart.find(cartItem => cartItem.id === item.id);
        console.log(index, existing);
        if (index > 4) {
            if (existing) {
                console.log("This item cant be added more han once");
                return;
            } else {
                dispatch(addItem({ ...item, Quantity: 1 }))
            }
        }
        else {
            if (existing) {
                const updatedCart = Productsdata.cart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, Quantity: existing.Quantity + (quantity[item.id] || 1) } : cartItem
                )
                dispatch(updateItem(updatedCart));
                console.log("This item added again");
            }
            else {
                dispatch(addItem({ ...item, Quantity: quantity[item.id] || 1 }))
            }
        }
    };

    return (
        <div className='container'>
            <div className='col m-2'>
                <Link to="/viewCart">Save</Link>
            </div>
            <div className='row justify-content-center gap-4 fs-5'>
                {Productsdata && Productsdata.product.map((i, index) => (
                    <div className='col-12 col-sm-10 col-md-8 col-lg-5 ' key={i.id}>
                        <div className='p-4 mb-4 d-flex bg-light justify-content-between'>
                            <div className='row justify-content-center flex-column'>
                                <h5>{i.name}</h5>
                                <img src={i.photo} alt={i.name} style={{ height: "100px", width: "100px" }} />
                                {index < 4 && (
                                    <input
                                        type='number'
                                        placeholder='Quantity'
                                        min="1"
                                        value={quantity[i.id] || ""}
                                        onChange={(e) => {
                                            const input = parseInt(e.target.value);
                                            if (input === "" || (!isNaN(input) && parseInt(input) >= 1)) {
                                                setQuantity(prevQuantities => ({
                                                    ...prevQuantities,
                                                    [i.id]: input
                                                }));
                                            }
                                        }}
                                        className='form-control mt-2'
                                    />
                                )}
                                <button onClick={() => handleAddItem(i, index)} className='btn btn-dark mt-2'>ADD ITEM</button>
                            </div>

                            <div className='mt-2 text-left' >
                                <div>Total Price: {quantity[i.id] && i.price * quantity[i.id]}</div>
                                <div>Total Quantity: {quantity[i.id]}</div>
                                <div>Each price: {i.price}</div>
                                <div>{Productsdata.cart.find(item => item.id === i.id) &&
                                    <h5 h5 className='text-success fw-bold '>Item Added To Cart</h5>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Products;
