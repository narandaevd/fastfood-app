export const START_LOAD =                              'START_LOAD',
             SORT_PRODUCT_LIST_BY_METHOD =             'SORT_PRODUCT_LIST_BY_METHOD',
             SORT_PRODUCT_LIST_BY_TYPE =               'SORT_PRODUCT_LIST_BY_TYPE'; 

export const startLoadAC = () => ({
    type: START_LOAD,
})

export const sortListByMethodAC = method => ({
    type: SORT_PRODUCT_LIST_BY_METHOD,
    method,
})

export const sortListByTypeAC = typeOfSort => ({
    type: SORT_PRODUCT_LIST_BY_TYPE,
    typeOfSort,
})