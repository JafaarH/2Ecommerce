export const intialState = {
    total: 0,
    products: []
}

export const Reducer = (state: any , action: { type: any; payload: any; }) => {
    const {type, payload} = action;
    switch (type){
        case "add":
            return {
                ...state,
                products: payload.products
            }
        case "remove":
            return {
                ...state,
                products: payload.products
            }
        case "price": 
        return {
            ...state,
            total: action.payload
        }
        default: throw new Error("problem in Reducer")
    }

} 