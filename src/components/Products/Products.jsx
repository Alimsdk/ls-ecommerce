import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Products = () => {
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState([]);

    const handleAddToCart=(products)=>{
        const addedProducts=[...cartItems,products];
        setCartItems(addedProducts);
    }
    useEffect(()=>{
        fetch('./shoes.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div style={{display:'flex'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',
        borderRight:'2px solid white',columnGap:'30px',rowGap:'20px'}}>
            {
                products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)
            }
        </div>
        <div>
            {
                cartItems.map(cartItem=><Cart key={cartItem.id} cartItem={cartItem}/>)
            }
        </div>
        </div>
    );
};

export default Products;