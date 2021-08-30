import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './../store/reducers/rootReducer'

function MenuItem({ menuItemData, onAddItemToCart }) {

    const [currentPrice, setCurrentPrice] = useState(menuItemData.price);
    const [selectedType, setSelectedType] = useState(menuItemData.types[0]);
    const [selectedSize, setSelectedSize] = useState(menuItemData.sizes[0]);

    useEffect(() => {
        selectedType === menuItemData.types[0] ? setCurrentPrice(menuItemData.price) : setCurrentPrice(menuItemData.price + 100);  
        if (selectedSize === menuItemData.sizes[0]) setCurrentPrice(prevPrice => prevPrice)
        else if (selectedSize === menuItemData.sizes[1]) setCurrentPrice(prevPrice => Math.floor(prevPrice * 1.25))
        else if (selectedSize === menuItemData.sizes[2]) setCurrentPrice(prevPrice => Math.floor(prevPrice * 1.7))
    }, [selectedSize, selectedType, menuItemData])

    return (
    <div className="pizza-block">
        <img
            className="pizza-block__image"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
            alt="Pizza"
        />
        <h4 className="pizza-block__title">{menuItemData.title}</h4>
        <div className="pizza-block__selector">
            <ul className='d-flex justify-content-around p-0 align-items-center m-2'>
            {
                menuItemData.types.map(type =>
                    selectedType === type ?
                        <li className="active" onClick={() => setSelectedType(type)}>{type}</li>
                    :
                        <li onClick={() => setSelectedType(type)}>{type}</li> 
                )
            }
            </ul>
            <ul className='d-flex justify-content-around p-0 align-items-center m-2'>
            {
                menuItemData.sizes.map(size => 
                    selectedSize === size ? 
                        <li className="active" onClick={() => setSelectedSize(size)}>{size} см.</li> 
                    : 
                        <li onClick={() => setSelectedSize(size)}>{size} см.</li>
                )
            }
            </ul>
        </div>
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {currentPrice} ₽</div>
            <div className="button button--outline button--add" onClick={() => onAddItemToCart({...menuItemData, type: selectedType, size: selectedSize, count: 1, price: currentPrice})}>
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
                />
            </svg>
            <span>Добавить</span>
            </div>
        </div>
    </div> 
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
