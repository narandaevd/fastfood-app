import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './../store/reducers/rootReducer'

function MenuSettings({ onSortListByMethod, onSortListByType }) {

    const typesOfPizzas = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sortModes = ['популярности', 'алфавиту', 'цене'];

    const [sortMenuShow, setSortMenuShow] = useState(false);
    const [sortMode, setSortMode] = useState(sortModes[0]);
    const [typeOfPizzas, setTypeOfPizzas] = useState(typesOfPizzas[0]);

    useEffect(() => {
      onSortListByMethod(sortMode);
    }, [sortMode])

    useEffect(() => {
      onSortListByType(typeOfPizzas);
    }, [typeOfPizzas])

    return (
    <div className="content__top">
        <div className="categories">
          <ul>
            {
              typesOfPizzas.map(currentTypeOfPizza =>
                 currentTypeOfPizza === typeOfPizzas ? 
                   <li className="active" onClick={() => setTypeOfPizzas(currentTypeOfPizza)}>{currentTypeOfPizza}</li>
                   :
                   <li onClick={() => setTypeOfPizzas(currentTypeOfPizza)}>{currentTypeOfPizza}</li>
                )
            }
          </ul>
        </div>
        <div className="sort" onClick={() => setSortMenuShow(prev => !prev)}>
          <div className="sort__label">
          {
            sortMenuShow ?
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
          }
            <b>Сортировка по:</b>
            <span>{sortMode}</span>
          </div>
          <div className={ sortMenuShow ? "sort__popup" : "sort__popup d-none" }>
            <ul className="p-0 m-0">
              {
                sortModes.map(mode => 
                  mode === sortMode ? 
                    <li className="active" onClick={() => setSortMode(mode)}>{mode}</li> 
                    : 
                    <li onClick={() => setSortMode(mode)}>{mode}</li>
                  )
              }
            </ul>
          </div>
        </div>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSettings)
