import { useContext } from "react";
import {ShopContext, ShopProvider} from "../Context/Context"


type Props = {
    item: {
        name: string;
        price: number;
        image: string;
    }
}



const SingleProduct = ({item}: Props) => {

    const {addToCart} = useContext(ShopContext)

    const handleAdd = () => {
        addToCart(item) 
    }

    return (
        <div className="Smcontainer">
            <img src={item.image} className="img" />
            <div className="cont">
            <div className="pb">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            </ div>
            <div className="height">
            <button className="button" onClick={ handleAdd }>Add to cart</button>
            </div>
            </div>
        </div>
    )
} 
export default SingleProduct; 

function addToCart(item: { name: string; price: number; image: string; }) {
    throw new Error("Function not implemented.");
}
