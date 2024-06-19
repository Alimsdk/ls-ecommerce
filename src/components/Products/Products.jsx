import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToLocalStorage, getStoredCart } from "../../utilities/localstorage";

const Products = () => {
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState([]);

    const handleAddToCart=(product)=>{
        const addedProducts=[...cartItems,product];
        setCartItems(addedProducts);
        addToLocalStorage(product.id);

    }
    useEffect(()=>{
        fetch('./shoes.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{       
        if(products.length>0){
            const storedCart=getStoredCart();
            console.log(storedCart);
            const savedCart=[];
            for(const id of storedCart){
                const shoe=products.find(product=> product.id === id);
                if(shoe){
                    savedCart.push(shoe);
                }
                setCartItems(savedCart)
            }
        }
    },[products])
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