import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStored, getStoredCart, removeFromLS } from "../../Utilities/locatstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottle] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('bottles.json');
            const data = await res.json();
            setBottle(data);
        }
        loadData();
    },[]);

    useEffect(()=>{
        if(bottles.length > 0){
            const getData = getStoredCart();
            const savedCart = [];
            for(const id of getData){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart);
        }
    }, [bottles]);// bottles change hole againg call korbe

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStored(bottle.id);
    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="cart-container">
                {
                    bottles.map((bottle, idx) => <Bottle
                        key={idx}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}>
                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;