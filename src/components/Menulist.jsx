import React from 'react'
import MenuItem from './MenuItem'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './../store/reducers/rootReducer';

function Menulist(props) {
    return (
        <div className="content__items">
            { 
                props.productList.items.map(
                    item => <MenuItem menuItemData={item} />
                    ) 
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Menulist);
