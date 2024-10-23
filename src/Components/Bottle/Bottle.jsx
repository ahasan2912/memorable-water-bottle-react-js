import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {id, name, img, price} = bottle;
    return (
        <div className='cart'>
             <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <h3>Price: ${price}</h3>
            <button onClick={()=>handleAddToCart(bottle)}>Purches</button>
        </div>
    );
};

export default Bottle;