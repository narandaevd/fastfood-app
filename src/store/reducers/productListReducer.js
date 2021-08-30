import { START_LOAD, 
    SORT_PRODUCT_LIST_BY_METHOD, 
    SORT_PRODUCT_LIST_BY_TYPE 
} from './../actions/productListActions'
import  { startLoadAC, 
    sortListByMethodAC, 
    sortListByTypeAC 
} from './../actions/productListActions'
import { UpdateProductListState, 
    compareByAlphabet, 
    compareById, 
    compareByPrice, 
    compareByType 
} from './customFunctions'
import { data } from './../../database/db'

const initialState = {
    items: [...data],
}

function productListReducer(state = initialState, action) {
    let newItems = [...state.items];
    switch (action.type) {

        case START_LOAD:
            return new UpdateProductListState(newItems);

        case SORT_PRODUCT_LIST_BY_METHOD:
            if (action.method === 'алфавиту')       newItems.sort(compareByAlphabet)
            if (action.method === 'цене')           newItems.sort(compareByPrice)
            if (action.method === 'популярности')   newItems.sort(compareById)
            return new UpdateProductListState(newItems);

        case SORT_PRODUCT_LIST_BY_TYPE:
            newItems.sort((item1, item2) => compareByType(item1, item2, action.typeOfSort))
            return new UpdateProductListState(newItems);
            
        default:
            return state;
    }
}

const productListStateToProps = ({ productList }) => ({
    ...productList,
})

const productListDispatchToProps = dispatch => ({
    onStartLoad: () => dispatch(startLoadAC()),
    onSortListByMethod: method => dispatch(sortListByMethodAC(method)),
    onSortListByType: type => dispatch(sortListByTypeAC(type)),
})

export default productListReducer
export { productListStateToProps, productListDispatchToProps }