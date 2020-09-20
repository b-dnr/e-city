import { FETCH_DATA, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILED,
    ADD_NEW_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT
} from "./constants";

const INIT_STATE = {
    products: [],
    loading: false,
    err: null,
    data: []
}

const ProductReducer = (state = INIT_STATE, action)=>{
    switch (action.type) {
        case FETCH_DATA:
            return{...state, loading: true};
        case FETCH_DATA_SUCCESS:
            return {
                ...state, 
                loading: false, 
                err: null, 
                data: action.payload
            }
        case FETCH_DATA_FAILED:
            return {
                ...state, 
                loading: false, 
                err: action.payload
            }
        case ADD_NEW_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload]
            }
        case DELETE_PRODUCT:
            return{
                ...state, products: state.products.filter(
                    item => item.id === action.payload.id ?
                        action.payload : item
                )
            }
        case EDIT_PRODUCT:
            return{
                ...state, products: state.products.map(
                    item => item.id === action.payload.id ? 
                    action.payload : item
                )
            }
        default:
            return state;
    }
}

export default ProductReducer;