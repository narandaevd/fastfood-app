import { RESET_CART, 
    ADD_ITEM_TO_CART, 
    DELETE_ITEM_FROM_CART, 
    ADD_ONE_PRODUCT_TO_ITEM_IN_CART,
    REMOVE_ONE_PRODUCT_FROM_ITEM_IN_CART 
} from './../actions/cartActions'
import { resetCartAC, 
    addItemToCartAC, 
    deleteItemFromCartAC, 
    addOneProductToItemInCartAC, 
    removeOneProductFromItemInCartAC 
} from './../actions/cartActions'
import { isInCart, 
    updateCartItem, 
    deleteItemFromCart, 
    UpdateCartState 
} from './customFunctions'

const initialState = {
    totalItems: 0,
    totalPrice: 0,
    items: [],
};

function cartReducer(state = initialState, action) {
    const COUNT_OF_ADDING_ITEMS = 1,
          COUNT_OF_REMOVING_ITEMS = -1;
    let newItems = [...state.items];

    switch (action.type) {

        case RESET_CART:
            newItems = [];
            return new UpdateCartState(newItems);

        case ADD_ITEM_TO_CART:
            isInCart(newItems, action.item) ?
                updateCartItem(newItems, action.item, COUNT_OF_ADDING_ITEMS) 
                : 
                newItems.push(action.item);
            return new UpdateCartState(newItems);
            
        case DELETE_ITEM_FROM_CART:
            newItems = deleteItemFromCart(newItems, action.item);
            return new UpdateCartState(newItems);

        case ADD_ONE_PRODUCT_TO_ITEM_IN_CART:
            updateCartItem(newItems, action.item, COUNT_OF_ADDING_ITEMS);
            return new UpdateCartState(newItems);

        case REMOVE_ONE_PRODUCT_FROM_ITEM_IN_CART:
            action.item.count > 1 ? 
                updateCartItem(newItems, action.item, COUNT_OF_REMOVING_ITEMS) 
                : 
                newItems = deleteItemFromCart(newItems, action.item);
            return new UpdateCartState(newItems);
            
        default:
            return {...state};
    }
};

const cartStateToProps = ({ cart }) => ({
    ...cart,
});

const cartDispatchToProps = dispatch => ({
    onResetCart: () => dispatch(resetCartAC()),
    onAddItemToCart: item => dispatch(addItemToCartAC(item)),
    onDeleteItemFromCart: item => dispatch(deleteItemFromCartAC(item)),
    onAddOneProductToItemInCartAC: item => dispatch(addOneProductToItemInCartAC(item)),
    onRemoveOneProductFromItemInCartAC: item => dispatch(removeOneProductFromItemInCartAC(item)),
});

export default cartReducer; 
export { cartStateToProps, cartDispatchToProps };
