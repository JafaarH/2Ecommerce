import SingleProduct from "./SingleProduct";
import {storeData} from "../Products"
import "./product.css"


const HomePage = () => {



    return (
        <div className="Bgcontainer">
           {storeData.map((item, i)=> (
            <SingleProduct 
            key={i}
            item={item}
            />
           ))}
        </div>
    )
}
export default HomePage; 