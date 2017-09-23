import React from 'react';
import PropTypes from 'prop-types';
import './list.css';

const ListItem =  (props) => {

    return (
        <div
            className="Button List-Item"
            onClick={() => props.onClick(props.item)}
        >
            {props.item.name}
        </div>
    );
  
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func
}


export default ListItem;