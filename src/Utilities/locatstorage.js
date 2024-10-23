const getStoredCart = ()=>{
    const stringifiedData = localStorage.getItem('cart');
    if(stringifiedData){
        return JSON.parse(stringifiedData);
    }
    return [];
}

const saveLocalStored = (cart)=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLocalStored = (id)=>{
    const cart = getStoredCart();
    cart.push(id);
    saveLocalStored(cart);
}

const removeFromLS = id => {
    const cart =getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveLocalStored(remaining); //id sate sate na mille thakbe ar mile chole jabe.
}
export {addToLocalStored, getStoredCart, removeFromLS}