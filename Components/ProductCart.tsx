import { ShopContext } from "../Context/Context"
import "./productcartstyle.css"
import {useContext} from "react"

type props = {
    product: {
        name: string,
        image:string,
        price: number
    }
}

const ProductCart = ({product}: props) => {
    
    const {removeFromCart} = useContext(ShopContext)
    const handleRemove = () => {
        removeFromCart(product);
    }
    return (
        <>
        <div className="smcontainer">
            <img src={product.image} className="img2" />
            <div className="hp">
            <h6>{product.name}</h6>
            <p>${product.price}</p>
            </div>
            <button className="bttn" onClick={handleRemove}>Remove from cart</button>
           
        </div>
        
        </>
    )
}
export default ProductCart;