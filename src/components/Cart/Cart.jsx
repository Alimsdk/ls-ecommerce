import PropTypes from 'prop-types'
const Cart = ({cartItem}) => {
    const {image,name,price}=cartItem;
    return (
        <div style={{display:'flex',margin:'20px 0'}}>
            <img style={{width:'40px',borderRadius:'50%'}} src={image} alt="" /> &nbsp; &nbsp; 
            <p>{name}</p> &nbsp;&nbsp;
            <p>	&#2547; {price}</p>
        </div>
    );
};

Cart.propTypes={
    cartItem: PropTypes.array.isRequired
}

export default Cart;