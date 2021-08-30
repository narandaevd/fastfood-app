export const RESET_CART =                              'RESET_CART',
             ADD_ITEM_TO_CART =                        'ADD_ITEM_TO_CART',
             DELETE_ITEM_FROM_CART =                   'DELETE_ITEM_FROM_CART',
             ADD_ONE_PRODUCT_TO_ITEM_IN_CART =         'ADD_ONE_PRODUCT_TO_ITEM_IN_CART',
             REMOVE_ONE_PRODUCT_FROM_ITEM_IN_CART =    'REMOVE_ONE_PRODUCT_FROM_ITEM_IN_CART'; 

export const resetCartAC = () => ({
    type: RESET_CART,
});
export const addItemToCartAC = item => ({
    type: ADD_ITEM_TO_CART,
    item,
});
export const deleteItemFromCartAC = item => ({
    type: DELETE_ITEM_FROM_CART,
    item,
})
export const addOneProductToItemInCartAC = item => ({
    type: ADD_ONE_PRODUCT_TO_ITEM_IN_CART,
    item,
})
export const removeOneProductFromItemInCartAC = item => ({
    type: REMOVE_ONE_PRODUCT_FROM_ITEM_IN_CART,
    item,
})