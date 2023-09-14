import {createContext, useReducer, useContext} from "react"
import { Reducer, intialState } from "./Reducer"

type props = {
    children: React.ReactNode
}

type context = {
    total: number,
    products: [],
    addToCart: (product: any) => void,
    removeFromCart: (product: {
        name: string;
    }) => void
}


export const ShopContext = createContext({} as context)

export const ShopProvider = ({children}: props) => {

    const [state, dispatch] = useReducer(Reducer, intialState)

    const addToCart = (product: any) => {
        const updatedCart = state.products;
        updatedCart.push(product)

        totalPrice(updatedCart);

        dispatch({
            type: "add",
            payload: {
                products: updatedCart
            }
        })
    }
    

    const removeFromCart = (product: { name: string }) => {
        const updatedCart = state.products.filter((currentProduct: { name: any }) => currentProduct.name !== product.name )
        

        totalPrice(updatedCart);

        dispatch({
            type: "remove",
            payload: {
                products: updatedCart
            }
        })
    }

    const totalPrice = (products: []) => {
        let total = 0;
        products.forEach((product: { price: number }) => total += product.price)

        dispatch({
            type: "price",
            payload: total
        })
    } 

    const value = {
        addToCart,
        removeFromCart,
        total: state.total,
        products: state.products
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

