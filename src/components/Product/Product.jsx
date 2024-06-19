
const Product = ({product,handleAddToCart}) => {
    const {image,name,price,brand}=product;
    return (
        <div style={{backgroundColor:"grey",padding:"10px 20px",borderRadius:"10px",margin:"10px 20px"}}>
            <img style={{width:'150px',height:'150px',borderRadius:"50%"}} src={image} alt="" />
            <p style={{fontWeight:'bold'}}>{name}</p>
            <p>{brand}</p>
            <p style={{fontWeight:'bold'}}>	&#2547; {price} TK</p>
            <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;