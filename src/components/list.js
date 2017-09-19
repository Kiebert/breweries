import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
import ListItem from './../containers/listitem';

const List = (props) => {

    return (
        <div className="List">
            {props.items !== null && props.items.map(item => {
                return (
                    <ListItem item={item} key={item.name} />
                );
            })}
        </div>
    )

}

List.propTypes = {
    items: PropTypes.array
}
List.defaultProps = {
    items: []
}
export default List;