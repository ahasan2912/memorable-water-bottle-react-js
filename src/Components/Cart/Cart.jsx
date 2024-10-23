import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Cart: {cart.length}</h2>
            <div className="cart-container-2">
            {
            cart.map((bottle, idx) => <div key={idx}>
                <img src={bottle.img}></img>
                <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
            </div>
            )
            }
            </div>
        </div>
    );
};

Cart.prototype = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;