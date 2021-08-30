import { combineReducers } from "redux";
import cartReducer, { cartStateToProps, cartDispatchToProps } from './cartReducer';
import productListReducer, { productListStateToProps, productListDispatchToProps } from './productListReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    productList: productListReducer,
});

const mapStateToProps = state => ({
    cart: cartStateToProps(state),
    productList: productListStateToProps(state),
});

const mapDispatchToProps = dispatch => ({
    ...cartDispatchToProps(dispatch),
    ...productListDispatchToProps(dispatch),
});

export default rootReducer;
export { mapStateToProps, mapDispatchToProps }