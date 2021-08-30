import _ from 'lodash';

export function isEqualProduct(cartItem, currentItem) {
    if ((cartItem.title === currentItem.title)
        && (cartItem.size === currentItem.size)
        && (cartItem.type === currentItem.type))
        return true;
    return false;
}

export function isInCart(items, item) {
    let flag = false;
    items.forEach(cartItem => {
        if (isEqualProduct(cartItem, item))
            flag = true;
    });
    return flag;
}

export function updateCartItem(items, newItem, amount) {
    items.forEach(item => {
        if (isEqualProduct(item, newItem)) 
            item.count += amount;
    })
}

export function deleteItemFromCart(items, item) {
    return items.filter(currentItem => !_.isEqual(currentItem, item));
}

export class UpdateCartState {
    constructor(newItems) {
        this.items = [...newItems];
        this.totalPrice = newItems.reduce((total, item) => total + item.price * item.count, 0);
        this.totalItems = newItems.reduce((count, item) => count + item.count, 0);
    }
}

export class UpdateProductListState {
    constructor(newItems) {
        this.items = [...newItems];
    }
}

export const compareByAlphabet = (item1, item2) => {
    if (item1.title > item2.title) 
        return 1;
    if (item1.title === item2.title)
        return 0;
    if (item1.title < item2.title)
        return -1;
}

export const compareByPrice = (item1, item2) => item1.price - item2.price;

export const compareById = (item1, item2) => item1.id - item2.id;

export const compareByType = (item1, item2, type) => {
    if (item1.content.includes(type) && item2.content.includes(type))
    	return 0;
    if (!item2.content.includes(type))
    	return -1;
    if (!item1.content.includes(type))
    	return 1; 
}