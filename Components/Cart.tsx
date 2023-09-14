import { useContext } from "react";
import {ShopContext} from "../Context/Context"
import ProductCart from "./ProductCart";

const Cart = () => {
    const {products, total} = useContext(ShopContext)

    return (
        <div className="bgcontainer">
            <div className="title">
            <h3>Your cart</h3>
            <p>Total: ${total}</p>
            </div>
            {products.map((product,i) => (
                <ProductCart 
                key={i}
                product={product}
                />
            ))}
        </div>
    )
}
export default Cart;